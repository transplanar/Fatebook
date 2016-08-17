class BranchSerializer < ActiveModel::Serializer
  attributes :parent_id, :destination_id, :id, :choice_text

  belongs_to :story
  belongs_to :parent_page
  belongs_to :destination_page
end
