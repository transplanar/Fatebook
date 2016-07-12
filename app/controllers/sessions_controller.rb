class SessionsController < ApplicationController
  def index
  end

  def new
  end

  def create
    @user = User.find_by(username: params[:session][:username].downcase)

    if @user && @user.authenticate(params[:session][:password])
      create_session(@user)
      render json: @user, status: 201
    else
      render json: { error: "Error saving session. PARAMS #{params}", status: 400 }, status: 400
    end

  end

  def destroy
    destroy_session(current_user)

    render json: {status: 200}
  end
end
