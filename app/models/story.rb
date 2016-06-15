class Story < ActiveRecord::Base
  has_one :first_page, where(:page_id => 1)
  has_many :pages
end
