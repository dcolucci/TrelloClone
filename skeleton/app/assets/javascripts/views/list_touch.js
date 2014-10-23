TrelloClone.Views.ListTouch = Backbone.View.extend({

  template: JST["lists/touch"],

  tagName: "div",

  events: {
    "submit .list-touch": "updateList"
  },

  render: function () {
    var content = this.template({
      list: this.model,
      method: "Create List"
    });

    this.$el.html(content);
    return this;
  },

  updateList: function (event) {
    event.preventDefault();

    var listData = $(event.currentTarget).serializeJSON();

    var board = this.collection.board;

    console.log(listData);

    listDataNext = _.extend(listData.list, { board_id: board.get("id") });

    this.model.set(listDataNext);

    // var listDataWithBoard = _.extend(listData, { board_id: board.get("id") });

    //this.model.set(listDataWithBoard);

    if (this.model.isNew()) {
      this.collection.create(this.model);
    } else {
      this.model.save({});
    }

    // may need to add some error handling
    // e.g. if user does not give board name
    this.remove();
    Backbone.history.navigate("", {trigger: true});
  }

});