class SessionsController < ApplicationController
  def create
    user = User.find_by(email: session_params[:email])
    if user.nil?
      render json: { data: nil, errors: ['Account does not exist'] }, status: 400
    elsif user&.authenticate(session_params[:password])
      login_info = login(user)
      payload = { data: login_info, errors: nil }
      render json: payload, status: 200
    else
      render json: { data: nil, errors: ['Incorrect credentials'] }, status: 400
    end
  end

  def destroy
    session = Session.find_by(auth_token: params[:auth_token])
    if session.nil?
      render json: { data: nil, errors: ['Invalid session'] }, status: 400
    else
      session.destroy
      render json: { data: ['Logout success'] }, status: 200
    end
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
