class UserScoreSerializer < ActiveModel::Serializer
  attributes :game_count

  def game_count
    "Wins: #{self.object.count}"
  end
end
