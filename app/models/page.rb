class Page < ActiveRecord::Base
  belongs_to :branch
  has_many :branches
  has_many :pages, through: :branch
end
