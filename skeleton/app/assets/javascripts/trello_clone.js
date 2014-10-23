window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new TrelloClone.Routers.Router($("#main"));
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    Backbone.history.start();
  }
};

// $(function() {
//   window.TrelloClone.initialize();
// });
