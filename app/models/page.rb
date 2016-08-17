class Page < ActiveRecord::Base
  belongs_to :story
  has_many :branches, foreign_key: :parent_id
end
