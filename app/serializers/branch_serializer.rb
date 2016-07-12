class BranchSerializer < ActiveModel::Serializer
  # attributes :id, :title, :content, :summary, :complete

  attributes :parent_id, :destination_id, :id, :choice_text

  belongs_to :story
  belongs_to :parent_page
  belongs_to :destination_page
end


# class Branch < ActiveRecord::Base
#   # belongs_to :parent_page, :class_name => 'Page', foreign_key: :parent_id
#   # TODO associate with story?
#   belongs_to :story
#   belongs_to :parent_page, :class_name => 'Page', foreign_key: :parent_id
#   belongs_to :destination_page, :class_name => 'Page', foreign_key: :destination_id
# end
