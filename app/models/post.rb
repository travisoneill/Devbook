class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :commenters, class_name: "User", through: :comments, source: :user

  #gets the most recent 'lim' posts made by all users with id in 'arr'
  #and eager loads associated posters comments and commenters
  def self.tl_posts(arr, lim)
    Post.where(user_id: arr).order(created_at: :desc).limit(lim).eager_load(:user, comments: :user)
  end

end
