class StorySerializer < ActiveModel::Serializer
  #TODO Add more attrs to serializer
  attributes :id, :title, :description, :summary

  has_many :pages
end
