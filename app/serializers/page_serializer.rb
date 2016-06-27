class PageSerializer < ActiveModel::Serializer
  #TODO Add more attrs to serializer
  # REVIEW parent page and id?
  attributes :id, :title, :content, :summary, :choice_text, :parent_page, :story, :branches

  has_many :branches
  belongs_to :story
end
