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
      @user.remove_private
      render json: @user
    else
      flash.now[:errors] = ["Invalid Credentials"]
      redirect_to root
    end
  end
  # sends map of all user relations to a store front end.  Reationship is
  # checked by looking for inclusion on in the hash rather than firing a DB read.
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
    render json: @user.remove_private
  end
end
