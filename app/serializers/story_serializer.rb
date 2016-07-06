class StorySerializer < ActiveModel::Serializer
  #TODO Add more attrs to serializer
  # attributes :id, :title, :description, :summary
  attributes :id, :title, :description, :summary

  has_many :pages
  belongs_to :user
end
