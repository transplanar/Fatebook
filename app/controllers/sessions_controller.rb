class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email:params[:session][:email].downcase)

    if user && user.authenticate(params[:session][:password])
      create_session(user)
    else
      # error
    end
  end

  def destroy
    destroy_session(current_user)
  end
end
