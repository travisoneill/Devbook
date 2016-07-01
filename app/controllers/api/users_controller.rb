class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      Searchable.create!(
        user_id: @user.id,
        fname: @user.fname.downcase,
        lname: @user.lname.downcase,
        fullname: @user.full_name.downcase
        )
      Action.create!(initiator_id: @user.id, action_type: "account_creation")
      sign_in(@user)
      render :show
      # render json: @user
    else
      flash.now[:errors] = @user.errors.full_messages
      redirect_to root
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    user = User.new(user_params)
    if user.update!
      render json: user
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
      render json: user
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def index
  end

  private
  def user_params
    params.require(:user)
          .permit(:fname, :lname, :full_name,
                  :password_digest, :password,
                  :session_token, :email, :dob)
  end
end
