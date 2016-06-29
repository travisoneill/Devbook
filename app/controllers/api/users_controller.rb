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
      render json: @user
    else
      flash.now[:errors] = @user.errors.full_messages
      redirect_to root
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  def index
  end

  private
  def user_params
    params.require(:user)
          .permit(:fname, :lname, :full_name,
                  :password_digest, :password,
                  :session_token, :email)
  end
end
