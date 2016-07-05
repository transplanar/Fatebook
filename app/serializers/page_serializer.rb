class PageSerializer < ActiveModel::Serializer
  #TODO Add more attrs to serializer
  # REVIEW parent page and id?
  # attributes :id, :title, :content, :summary, :choice_text, :parent_branch, :story
  # attributes :id, :title, :content, :summary
  attributes :id, :title, :content, :summary, :complete

  has_many :branches
  belongs_to :story
  belongs_to :parent_branch
  # belongs_to :parent_page
end
