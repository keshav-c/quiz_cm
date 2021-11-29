class ApplicationController < ActionController::Base

  def login(user)
    user.session&.destroy
    session = user.create_session
    {
      token: session.auth_token,
      loggedin: true
    }
  end
end
