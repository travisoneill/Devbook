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

  def relation
    @user = User.find(params[:id])
    @relation = {};
    @user.friends.each { |f| @relation[f.id] = "friends" }
    @user.incoming.each { |i| @relation[i.id] = "incoming" }
    @user.outgoing.each { |o| @relation[o.id] = "outgoing" }
    render json: @relation
  end

  def destroy
    @user = current_user
    sign_out
    render json: @user
  end
end
