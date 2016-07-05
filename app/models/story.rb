class Story < ActiveRecord::Base
  has_many :pages, dependent: :destroy
  has_many :branches, dependent: :destroy
end
