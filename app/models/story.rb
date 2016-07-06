class Story < ActiveRecord::Base
  # REVIEW foreign_key needed here?
  # belongs_to :user, foreign_key: :user_id
  belongs_to :user
  has_many :pages, dependent: :destroy
  has_many :branches, dependent: :destroy
end
