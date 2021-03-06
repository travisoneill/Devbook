class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save!
      Action.create!(initiator_id: @photo.user_id, action_type: "photo")
      render json: @photo
    else
      flash[:errors] = "Error"
    end

  end

  def seed(data)
    Photo.create!(data)
    Action.create!(initiator_id: data[:user_id], action_type: "photo")
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo.destroy!
      render json: @photo
    else
      flash[:errors] = "Error"
    end
  end

  def index

  end

  def show
    id = params[:id]
    @photos = Photo.where(user_id: id)
    render json: @photos.to_a
  end

  def update
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :url, :description)
  end

end
