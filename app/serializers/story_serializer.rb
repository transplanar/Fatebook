class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :summary, :published

  has_many :pages
  belongs_to :user
end
