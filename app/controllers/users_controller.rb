class UsersController < ApplicationController
  before_action :set_user, except: [:create]

  def new
    @user = User.new
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)

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

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    # REVIEW why does this fix it? (removing require)
    # http://stackoverflow.com/questions/29815610/using-angular-and-rails-bcrypt-throwing-an-error-when-trying-to-create-user
    # params.require(:user).permit(:username, :password, :password_confirmation)
    params.permit(:username, :password, :password_confirmation,
                  :last_page_edit_id, :last_page_play_id,
                  :last_page_edit_story_id, :last_page_play_story_id)
  end
end
