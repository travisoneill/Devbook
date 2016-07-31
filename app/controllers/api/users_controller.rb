class Api::UsersController < ApplicationController

  attr_writer :user

  def new
  end

  def mutual
    user1 = User.find(params[:id1])
    user2 = User.find(params[:id2])
    @mutual = (user1.friends & user2.friends)
    @mutual.each {|m| m.remove_private}
    @mutual << @mutual.length
    render json: @mutual
  end

  def create
    if @user
      @user.profile_pic_url ||= DEFAULTS[:profile_pic]
      @user.cover_pic_url ||= DEFAULTS[:cover_photo]
      @user.save!
      make_associated_objects
    else
      @user = User.new(user_params)
      @user.profile_pic_url = DEFAULTS[:profile_pic]
      @user.cover_pic_url = DEFAULTS[:cover_photo]
      save_user
    end
  end

  def make_associated_objects
    Searchable.create!(
      user_id: @user.id,
      fname: @user.fname.downcase,
      lname: @user.lname.downcase,
      fullname: @user.full_name.downcase,
      profile_pic_url: @user.profile_pic_url
      )
    Action.create!(initiator_id: @user.id, action_type: "account_creation")
  end

  def save_user
    if @user.save!
      make_associated_objects
      sign_in(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      redirect_to root
    end
  end




  def show
    @user = User.find(params[:id])
    @incoming = @user.incoming_requests
    @outgoing = @user.outgoing_requests
    render json: @user.remove_private
  end

  def update
    user = User.find(params[:id])
    if user.update!(user_params)
      render json: user.remove_private
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def destroy
    id = params[:id]
    user = User.find(id)
    to_destroy = Action.find(initiator_id: id)
    to_destroy += Action.find(recipient_id: id)
    to_destroy += Friendship.find(user_id1: id)
    to_destroy += Friendship.find(user_id2: id)
    to_destroy += Searchable.find(user_id: id)
    to_destroy += Post.find(user_id: id)
    to_destroy += Comment.find(user_id: id)
    user.sign_out
    if user.destroy!
      to_destroy.each do |object|
        object.destroy!
      end
      render json: user.remove_private
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def index
  end

  def button
    status = "none"
    @current = User.find(params[:id1])
    @selected = User.find(params[:id2])
    while true
      incoming = @current.incoming_requests.map {|req| req.initiator_id}
      if incoming.include?(@selected.id)
        status = "incoming"
        break
      end
      outgoing = @current.outgoing_requests.map {|req| req.recipient_id}
      if outgoing.include?(@selected.id)
        status = "outgoing"
        break
      end
      status = "friends" if @current.friends.include?(@selected)
      break
    end
    render json: [status]
  end

  def friends
    @user = User.find(params[:id])
    @friends = @user.friends.each {|f| f.remove_private}
    @friends << @friends.length
    render json: @friends
  end

  def incoming
    @user = User.find(params[:id])
    @incoming = @user.incoming.each {|f| f.remove_private}
    render json: @incoming
  end

  private
  def user_params
    params.require(:user)
          .permit(:fname, :lname, :full_name, :password_digest,
                  :password,:session_token, :email, :profile_pic_url,
                  :dob, :cover_pic_url, :gender)
  end

  DEFAULTS = {
    profile_pic: 'http://res.cloudinary.com/devbook/image/upload/v1467400087/devbook/app-images/default-profile-1.png',
    cover_photo: 'http://res.cloudinary.com/devbook/image/upload/o_20/v1467420996/devbook/app-images/default-cover.png'
  }
end
