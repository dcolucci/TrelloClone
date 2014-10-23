# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title

json.array! @board.lists do |json, list|
  json.id list.id
  json.title list.title
  json.board_id list.board_id
  json.ord list.ord
  json.created_at list.created_at
  json.updated_at list.updated_at

  json.array! list.cards do |json, card|
    json.id card.id
    json.title card.title
    json.list_id card.list_id
    json.description card.description
    json.ord card.ord
    json.created_at card.created_at
    json.updated_at card.updated_at
  end
end


