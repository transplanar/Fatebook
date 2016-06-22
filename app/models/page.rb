class Page < ActiveRecord::Base
  belongs_to :story
  # TODO refactor to has_many through?
  has_many :branches, :class_name => 'Page', foreign_key: :parent_id
  belongs_to :parent_page, :class_name => 'Page', foreign_key: :parent_id
end
