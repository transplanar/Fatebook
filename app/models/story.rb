class Story < ActiveRecord::Base
  # REVIEW foreign_key needed here?
  # belongs_to :user, foreign_key: :user_id
  belongs_to :user
  has_many :pages, dependent: :destroy
  has_many :branches, dependent: :destroy

  # scope :visible_to, ->(user){ user.stories.where(id: params[id]).exists? || story.published}
  # User may see a story if
    # the story is published
    # the story is owned by the user

  # scope :owned_by_user, ->(user){ user.stories.where(id: params[id]).exists? }
  # REVIEW is current_user accessible from here?
  scope :owned_by_user, -> (user){ where(user_id: user.id) }
  scope :is_published, -> { where(published: true) }
end
