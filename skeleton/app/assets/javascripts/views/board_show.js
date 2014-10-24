TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", function () {
      this.refresh();
      this._appendNewListLink();
    });

    this.listenTo(this.collection, "add", this.renderLists);
    this.$el.addClass("board-container");
  },

  template: JST['boards/show'],

  tagName: 'div',

  render: function () {
    var content = this.template({ board: this.model });

    this.$el.html(content);

    this.renderLists();

    return this;
  },

  renderLists: function () {
    var that = this;
    var $ul = this.$el.find('.lists-list');

    // collection is board's lists -- board.lists()
    this.collection.each (function (list) {
      var listView = new TrelloClone.Views.ListShow({
        model: list,
        collection: list.cards()
      });

      $ul.append(listView.render().$el);
    });
  },

  refresh: function () {
    this.$el.empty();
    this.render();
  },

  _appendNewListLink: function () {
    var $linkEl = $('<li>');
    var url = this.model.url();

    $linkEl.html('<h4><a href="#/' + url + '/lists/new">New List...</a></h4>');
    this.$el.find('.lists-list').append($linkEl);
  }

});