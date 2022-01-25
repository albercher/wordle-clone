class ScoreSerializer < ActiveModel::Serializer
  attributes :win
  belongs_to :user

end
