class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root
    else
      flash.now[:errors] = ["Invalid Credentials"]
      redirect_to root
    end
  end

  def destroy
    sign_out
    redirect_to root
  end
end
