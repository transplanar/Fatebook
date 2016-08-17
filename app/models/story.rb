class Story < ActiveRecord::Base
  belongs_to :user
  has_many :pages, dependent: :destroy
  has_many :branches, dependent: :destroy

  scope :owned_by_user, -> (id){ where(user_id: id) }
  scope :is_published, -> { where(published: true) }
end
