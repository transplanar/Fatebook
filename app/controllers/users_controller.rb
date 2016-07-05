class UsersController < ApplicationController
  before_action :set_user

  def new
    @user = User.new
  end

  def create
    @user = User.build(user_params)

    if user.save
      create_session(@user)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
