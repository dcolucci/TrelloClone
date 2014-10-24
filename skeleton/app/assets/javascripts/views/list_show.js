TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, "add", this.render)
  },

  template: JST['lists/show'],

  tagName: 'li',

  events: {
    "click .new-card-link-a": "showNewCard"
  },

  render: function () {
    var content = this.template({ list: this.model });

    this.$el.html(content);

    var $ul = this.$el.find('.cards-list');
    var that = this;

    // collection should be collection of cards
    this.model.cards().each (function (card) {
      var cardView = new TrelloClone.Views.CardShow({
        model: card
      });

      $ul.append(cardView.render().$el);
    });

    this._appendNewCardLink();

    return this;
  },

  showNewCard: function () {
    var list = this.model;
    var newCard = new TrelloClone.Models.Card({ list: list });

    var newCardView = new TrelloClone.Views.CardTouch({
      model: newCard,
      collection: list.cards()
    });

    this.$el.find('.new-card-link-li').html(newCardView.render().$el);
  },

  refresh: function () {
    this.$el.empty();
    this.render();
  },

  _appendNewCardLink: function () {
    var $linkEl = $('<li class="new-card-link-li">');
    var url = this.model.url();

    $linkEl.html('<a class="new-card-link-a">New Card...</a>');
    this.$el.find('.cards-list').append($linkEl);
  }

});