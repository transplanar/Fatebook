class SessionsController < ApplicationController
  def index
  end

  def new
  end

  def create
    @user = User.find_by(email:params[:session][:email].downcase)

    if @user && @user.authenticate(params[:session][:password])
      create_session(@user)
      # render json: user
    else
      # error
      render json: { error: "Error saving user", status: 400 }, status: 400
    end

    render json: @user, status: 201

  end

  def destroy
    destroy_session(current_user)
  end
end
