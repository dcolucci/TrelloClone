TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  // initialize: function (attributes, options) {
  //   this.lists = new TrelloClone.Collections.Lists([], this);
  // },

  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }

    return response;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], {
        board: this
      });
    }

    return this._lists;
  }

});