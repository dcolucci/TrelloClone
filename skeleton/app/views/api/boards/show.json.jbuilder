# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title
json.id @board.id
json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.board_id list.board_id
  json.cards list.cards do |card|
    json.title card.title
    json.list_id card.list_id
  end
end



