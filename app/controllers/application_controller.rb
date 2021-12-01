class ApplicationController < ActionController::Base

  def login(user)
    user.session&.destroy
    session = user.create_session
    {
      token: session.auth_token,
      loggedin: true
    }
  end

  def logged_in(token)
    user = User.includes(:session).where(sessions: { auth_token: token }).first!
    if user.nil?
      false
    else
      user
    end
  end

end
