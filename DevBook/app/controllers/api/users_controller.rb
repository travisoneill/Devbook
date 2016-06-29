class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      Searchable.create!(
        user_id: @user.id,
        fname: @user.fname.downcase,
        lname: @user.lname.downcase,
        full_name: @user.full_name.downcase
        )
      Action.create!(initiator_id: @user.id, type: "account_creation")
    else

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
          .permit(:fname, :lname, :full_name, :password_digest, :session_token)
          .permit!(:other)
  end
end
