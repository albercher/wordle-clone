class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :win
  has_one :user
end
