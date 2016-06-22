class StorySerializer < ActiveModel::Serializer
  #TODO Add more attrs to serializer
  attributes :title, :description, :summary

  has_many :pages
end
