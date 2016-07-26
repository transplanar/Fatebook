class Page < ActiveRecord::Base
  belongs_to :story
  # TODO refactor to has_many through?
  has_many :branches, foreign_key: :parent_id

  # REVIEW this doesn't do anything
  belongs_to :parent_branch, :class_name => 'Branch', foreign_key: :id
end
