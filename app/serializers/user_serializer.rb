class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :user_initial, :game_count, :results_count
  # has_many :scores

  def user_initial
    self.object.username[0,1]
  end

  def game_count
    self.object.scores.count
  end

  def results_count
    self.object.scores.group(:win).count
  end
end