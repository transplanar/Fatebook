class UserSerializer < ActiveModel::Serializer
  # REVIEW secure???
  attributes :id, :username, :password_digest
end
