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

  #API call for timeline hits here
  #decides which type of timeline needs to be loaded based on AJAX req data
  def timeline
    if params[:tl_type] == 'own'
      personal_timeline
    else
      other_timeline
    end
  end

  #selects most recent 25 comments by the current user or any of his friends
  #selects all comments and relevant user data for comment authors and organizes
  #into objects that can be used on the front end
  def personal_timeline
    @posts = User.find(params[:id]).tl_posts(25)
    @comments = {};
    @commenters = {};
    @posts.each do |post|
      @comments[post.id] = post.comments.sort {|x, y| x.created_at <=> y.created_at}
      post.comments.each do |comment|
        @commenters[comment.id] = {name: comment.user.full_name, url: comment.user.profile_pic_url}
      end
    end
    render json: {posts: @posts, comments: @comments, commenters: @commenters}
  end

  #does the same as personal_timeline but only for the selected users own posts
  def other_timeline
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
