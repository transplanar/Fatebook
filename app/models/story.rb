class Story < ActiveRecord::Base
  has_one :first_page, where(:page_id => 1), :class_name => "Page"
  has_many :pages
end
