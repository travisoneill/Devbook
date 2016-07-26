class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    id = post_params[:user_id]
    if @post.save!
      Action.create!(initiator_id: id, action_type: "post")
      render json: @post
    else
      flash.now[:errors] = @post.errors.full_messages
    end
  end

  def seed(data)
    Post.create!(data)
    Action.create!(initiator_id: data[:user_id], action_type: "post")
  end

  def update
    post = Post.find(params[:id])
    if post.update!(post)
      render json: post
    else
      flash.now[:errors] = @post.errors.full_messages
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy!(post)
      render json: post
    else
      flash.now[:errors] = @post.errors.full_messages
    end

  end

  def show
    @posts = Post.find_by(user_id: params[:id])
    render json: @posts
  end

  def index

  end

  def timeline
    @posts = User.find(params[:id]).posts_plus_comments
    @comments = {}
    @commenters = {};
    @posts.each do |post|
      @comments[post.id] = post.comments
      post.comments.each do |comment|
        @commenters[comment.id] = {name: comment.user.full_name, url: comment.user.profile_pic_url}
      end
    end
    render json: {posts: @posts, comments: @comments, commenters: @commenters}
  end

  private

  def post_params
    params.require(:post).permit(:body, :photo_url, :user_id, :thumbnail_url)
  end
end
