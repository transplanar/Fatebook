class Story < ActiveRecord::Base
  has_many :pages
  # has_one :first_page, :class_name => "Page"
end
