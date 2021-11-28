class UsersController < ApplicationController
  def create
    # user = User.create!(user_params)
    # if user
    #   render json: user
    # else
    #   # render json: user.errors
    #   render plain: "die"
    # end
    begin
      user = User.create!(user_params)
    rescue ActiveRecord::RecordInvalid
      render json: { message: 'Invalid input' }, status: 400
    rescue ActiveRecord::ActiveRecordError
      render json: { message: 'Something went wrong' }, status: 500
    else
      render json: { message: 'Great success' }, status: 200
    end
  end

  def show
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
