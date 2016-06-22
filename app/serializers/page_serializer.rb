class PageSerializer < ActiveModel::Serializer
  #TODO Add more attrs to serializer
  attributes :id, :title, :content, :summary, :choice_text

  has_many :branches
  belongs_to :story
end
