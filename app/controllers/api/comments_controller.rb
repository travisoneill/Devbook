class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    post_author = @comment.post.user
    commenter = @comment.user
    if @comment.save!
      Action.create!(initiator_id: @comment.user_id, recipient_id: post_author.id, action_type: 'comment')
      render json: {comment: @comment, user: {name: commenter.full_name, url: commenter.profile_pic_url} }
    else
      flash[:errors] = "Error"
    end
  end

  #recieves data from seed script /db/seeds.rb
  def seed(data)
    Comment.create!(data)
    Action.create!(initiator_id: data[:user_id], recipient_id: data[:post_id], action_type: 'comment')
  end

  def delete
  end

  private
  def comment_params
    params.require('comment').permit(:user_id, :post_id, :body)
  end
end
