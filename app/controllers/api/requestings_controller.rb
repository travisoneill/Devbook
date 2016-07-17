class Api::RequestingsController < ApplicationController
  def create
    id1 = params[:request][:initiator_id]
    id2 = params[:request][:recipient_id]
    @request = Requesting.new(initiator_id: id1, recipient_id: id2)
    if @request.save!
      render json: @request
    else
      flash[:errors] = "Error"
    end
  end

  def seed(data)
    Requesting.create!(initiator_id: data[:initiator_id], recipient_id: data[:recipient_id])
  end

  def destroy
    initiator = params[:id1]
    target = params[:id2]

    @request = Requesting.where('initiator_id = ? and recipient_id = ?', initiator, target)
    if @request[0].destroy!
      render json: @request
    else
      flash[:errors] = "Error"
    end
  end
end
