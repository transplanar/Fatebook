class UsersController < ApplicationController
  before_action :set_user, except: [:create]

  def new
    @user = User.new
  end

  def create
    # p "paramZ #{user_params}"
    # p "paramZ2 #{params}"
    @user = User.new(user_params)
    # @user = User.new(params)

    if @user.save
      create_session(@user)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy

    render json: User.all
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    # REVIEW why does this fix it?
    # http://stackoverflow.com/questions/29815610/using-angular-and-rails-bcrypt-throwing-an-error-when-trying-to-create-user
    # params.require(:user).permit(:username, :password, :password_confirmation)
    params.permit(:username, :password, :password_confirmation)
  end
end
