class PageSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :summary, :complete

  has_many :branches
  belongs_to :story
  belongs_to :parent_branch
end
