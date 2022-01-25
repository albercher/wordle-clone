class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :win
  belongs_to :user
end
