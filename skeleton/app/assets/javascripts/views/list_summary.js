TrelloClone.Views.ListSummary = Backbone.View.extend({

  tagName: 'li',

  render: function () {
    var title = this.model.get("title");
    var url = this.model.url();

    var link = '<a href="#/' + url + '">' + title + '</a>';

    this.$el.html(link);
    return this;
  }

});