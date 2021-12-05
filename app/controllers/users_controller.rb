class UsersController < ApplicationController
  def create
    begin
      user = User.new(user_params)
      user.save!
    rescue ActiveRecord::RecordInvalid
      render json: { data: nil, errors: user.errors.full_messages }, status: 400
    rescue ActiveRecord::ActiveRecordError
      render json: { data: nil, errors: ['Something went wrong'] }, status: 500
    else
      login_info = login(user)
      payload = { data: login_info, errors: nil }
      puts payload
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
