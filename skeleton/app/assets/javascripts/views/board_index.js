TrelloClone.Views.BoardIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", function () {
      this.refresh();
      this._appendNewBoardLink();
    });
  },

  template: JST['boards/index'],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    var $ul = this.$el.find('ul');
    this.collection.each (function (board) {
      var subView = new TrelloClone.Views.BoardSummary({
        model: board
      });

      $ul.append(subView.render().$el);
    });

    return this;
  },

  refresh: function () {
    this.$el.empty();
    this.render();
  },

  _appendNewBoardLink: function () {
    var $linkEl = $('<li>');
    $linkEl.html('<a href="#/api/boards/new">New Board...</a>');
    this.$el.find('ul').append($linkEl);
  }

});