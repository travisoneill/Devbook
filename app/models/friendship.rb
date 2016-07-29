class Friendship < ActiveRecord::Base

  belongs_to :user1, class_name: "User", foreign_key: :user_id1
  belongs_to :user2, class_name: "User", foreign_key: :user_id2

  def get(id)
    Friendship.where('user_id1: ? OR user_id2: ?', id, id)
  end

end
