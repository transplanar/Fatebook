class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest,
             :last_page_edit_id, :last_page_play_id,
             :last_page_edit_story_id, :last_page_play_story_id
end
