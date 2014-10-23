TrelloClone.Views.BoardTouch = Backbone.View.extend({

  template: JST["boards/touch"],

  tagName: "div",

  events: {
    "submit .board-touch": "updateBoard"
  },

  render: function () {
    var content = this.template({
      board: this.model,
      method: "Create Board"
    });

    this.$el.html(content);
    return this;
  },

  updateBoard: function (event) {
    event.preventDefault();

    var boardData = $(event.currentTarget).serializeJSON();

    this.model.set(boardData.board);

    if (this.model.isNew()) {
      this.collection.create(boardData.board);
    } else {
      this.model.save({});
    }

    // may need to add some error handling
    // e.g. if user does not give board name
    this.remove();
    Backbone.history.navigate("", {trigger: true});
  }

});