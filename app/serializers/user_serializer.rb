class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :user_initial
  has_many :scores

  def user_initial
    self.object.username[0,1]
  end
end