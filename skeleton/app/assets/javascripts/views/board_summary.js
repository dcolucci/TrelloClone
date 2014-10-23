TrelloClone.Views.BoardSummary = Backbone.View.extend({

  tagName: 'li',

  render: function () {
    var title = this.model.get("title");
    var url = this.model.url();

    var content = '<a href="#/' + url + '">' + title + '</a>';

    this.$el.html(content);
    return this;
  }

});