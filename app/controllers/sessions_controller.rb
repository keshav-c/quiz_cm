class SessionsController < ApplicationController
  def create
    user = User.find_by(email: session_params[:email])
    if user&.authenticate(session_params[:password])
      payload = login(user)
      render json: payload, status: 200
    else
      render json: { message: ['Incorrect credentials'] }, status: 400
    end
  end

  def destroy
    session = Session.find_by(auth_token: params[:auth_token])
    if session.nil?
      render json: { message: ['Invalid session'] }, status: 400
    else
      session.destroy
      render json: { message: ['Logout success'] }, status: 200
    end
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
