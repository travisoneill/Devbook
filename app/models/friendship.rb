class Friendship < ActiveRecord::Base

  belongs_to :user, foreign_key: :user_id1
  belongs_to :user, foreign_key: :user_id2


end
