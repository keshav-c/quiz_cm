class UsersController < ApplicationController
  def create
    begin
      user = User.new(user_params)
      user.save!
    rescue ActiveRecord::RecordInvalid
      render json: { message: user.errors.full_messages }, status: 400
    rescue ActiveRecord::ActiveRecordError
      render json: { message: ['Something went wrong'] }, status: 500
    else
      payload = login(user)
      render json: payload, status: 200
    end
  end

  def show
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
