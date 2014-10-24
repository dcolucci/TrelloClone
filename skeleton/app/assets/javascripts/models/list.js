TrelloClone.Models.List = Backbone.Model.extend({

  urlRoot: 'api/lists'

  // urlRoot: function () {
  //   return this.board.url() + '/lists'
  // },
  //
  // initialize: function (attributes, options) {
  //   this.board = attributes.board;
  // }

});