TrelloClone.Views.BoardShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", function () {
      this.refresh();
      this._appendNewListLink();
    });
  },

  template: JST['boards/show'],

  tagName: 'div',

  render: function () {
    var content = this.template({ board: this.model });

    this.$el.html(content);

    var $ul = this.$el.find('ul');

    this.collection.each (function (list) {
      var listView = new TrelloClone.Views.ListSummary({
        model: list
      });

      $ul.append(listView.render().$el);
    });

    return this;
  },

  refresh: function () {
    this.$el.empty();
    this.render();
  },

  _appendNewListLink: function () {
    var $linkEl = $('<li>');
    var url = this.model.url();

    $linkEl.html('<a href="#/' + url + '/lists/new">New List...</a>');
    this.$el.find('ul').append($linkEl);
  }

});