class Page < ActiveRecord::Base
  has_many :branches
  belongs_to :branch
  belongs_to :page, through: :branch
end
