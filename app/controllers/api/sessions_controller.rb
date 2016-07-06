class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render json: @user
    else
      flash.now[:errors] = ["Invalid Credentials"]
      redirect_to root
    end
  end

  def destroy
    @user = current_user
    sign_out
    render json: @user
  end
end
