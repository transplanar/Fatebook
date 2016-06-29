class Page < ActiveRecord::Base
  belongs_to :story
  # TODO refactor to has_many through?
  has_many :branches, foreign_key: :parent_id
  # belongs_to :parent_page, :class_name => 'Page', foreign_key: :parent_page_id
  # belongs_to :parent_branch, :class_name => 'Branch', foreign_key: :branch_id

  # REVIEW this doesn't do anything
  belongs_to :parent_branch, :class_name => 'Branch', foreign_key: :id
end
