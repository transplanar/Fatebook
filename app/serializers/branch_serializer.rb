class BranchSerializer < ActiveModel::Serializer
  # attributes :id, :title, :content, :summary, :complete

  attributes :parent_id, :destination_id, :id, :choice_text

  belongs_to :story
  belongs_to :parent_page
  belongs_to :destination_page
end
