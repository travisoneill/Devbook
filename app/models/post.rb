class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :commenters, class_name: "User", through: :comments, source: :user

  # Post.first.commenters.map { |user| {name: user.full_name, pic: user.profile_pic_url} }

  # def comments_plus(id)
  #   Post.eager_load(comments: :user).where(user_id: id)
  # end

end
