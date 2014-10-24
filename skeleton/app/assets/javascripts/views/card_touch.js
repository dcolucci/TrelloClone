TrelloClone.Views.CardTouch = Backbone.View.extend({

  template: JST["cards/touch"],

  tagName: "div",

  events: {
    "submit .card-touch": "updateCard"
  },

  render: function () {
    var content = this.template({
      card: this.model
    });

    this.$el.html(content);
    return this;
  },

  updateCard: function (event) {
    event.preventDefault();

    var cardData = $(event.currentTarget).serializeJSON();
    var list = this.collection.list;

    cardDataNext = _.extend(cardData.card, { list_id: list.get("id") });
    this.model.set(cardDataNext);

    if (this.model.isNew()) {
      this.collection.create(this.model);
    } else {
      this.model.save({});
    }

    // may need to add some error handling
    // e.g. if user does not give board name
    this.remove();
    var backNav = "";

    // why doesn't this work?!
    // Backbone.history.navigate(backNav, {trigger: true});
  }

});