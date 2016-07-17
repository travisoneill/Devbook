class Api::FriendshipsController < ApplicationController

  def create
    id1 = params[:id1]
    id2 = params[:id2]
    @request = Requesting.where('initiator_id = ? and recipient_id = ?', id2, id1)
    @friendship = Friendship.new(user_id1: id1, user_id2: id2)
    if @request[0].destroy! && @friendship.save!
      Action.create!(initiator_id: id1, recipient_id: id2, action_type: "friendship")
      render json: @friendship
    else
      flash[:errors] = "Error"
    end
  end

  def seed(data)
    Friendship.create!(data)
    Action.create!(initiator_id: data[:user_id1], recipient_id: data[:user_id2], action_type: "friendship")
  end

  def destroy
    id1 = params[:id1]
    id2 = params[:id2]
    @friendship = Friendship.where(user_id1: id1, user_id2: id2).union(Friendship.where(user_id1: id2, user_id2: id1))
    if @friendship[0].destroy!
      render json: @friendship
    else
      flash[:errors] = "Error"
    end
  end


end
