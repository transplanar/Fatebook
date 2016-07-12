class Story < ActiveRecord::Base
  # REVIEW foreign_key needed here?
  belongs_to :user
  has_many :pages, dependent: :destroy
  has_many :branches, dependent: :destroy

  # scope :owned_by_user, ->(user){ user.stories.where(id: params[id]).exists? }
  # REVIEW scoping inheretance to pages? use join?
  scope :owned_by_user, -> (id){ where(user_id: id) }
  scope :is_published, -> { where(published: true) }
end
