class Branch < ActiveRecord::Base
  # belongs_to :parent_page, :class_name => 'Page', foreign_key: :parent_id
  belongs_to :parent_page, :class_name => 'Page', foreign_key: :parent_id
  belongs_to :destination_page, :class_name => 'Page', foreign_key: :destination_id
end
