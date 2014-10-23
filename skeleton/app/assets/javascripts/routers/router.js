TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function ($el) {
    this.$el = $el;
  },

  routes: {
    "": "index",
    "api/boards/new": "newBoard",
    "api/boards/:id": "showBoard",
    "api/boards/:id/lists/new": "newList",
    "api/boards/:id/lists/:id": "showList"
  },

  index: function () {
    TrelloClone.boards.fetch();
    var view = new TrelloClone.Views.BoardIndex({
      collection: TrelloClone.boards
    });

    this._swapView(view);
  },

  newBoard: function () {
    var newBoard = new TrelloClone.Models.Board();
    var newBoardView = new TrelloClone.Views.BoardTouch({
      model: newBoard,
      collection: TrelloClone.boards
    });

    this.$el.append(newBoardView.render().$el);
  },

  showBoard: function (id) {
    var board = TrelloClone.boards.getOrFetch(id);

    var showBoardView = new TrelloClone.Views.BoardShow({
      model: board
    });

    board.fetch();

    this._swapView(showBoardView);
  },

  newList: function (boardId) {
    // probably don't need getOrFetch here
    var board = TrelloClone.boards.getOrFetch(boardId);
    var newList = new TrelloClone.Models.List({ board: board });

    var newListView = new TrelloClone.Views.ListTouch({
      model: newList,
      collection: board.lists()
    });

    this.$el.append(newListView.render().$el);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }

})