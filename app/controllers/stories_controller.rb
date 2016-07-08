class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :edit, :update, :destroy]

  def index
    # REVIEW set up scoping
    # @stories = Story.where(user_id: current_user.id)

    # p "params #{params[:user_id]} ***********************************"
    # user_id = params[:user_id]

    render json: Story.all
    # render json: Story.owned_by_user(user_id).is_published
  end

  def published_stories
    render json: Story.is_published
  end

  def owned_drafts
    render json: Story.owned_by_user(params[:user_id])
  end

  def show
    render json: @story
  end

  def new
    @story = Story.new
  end

  def edit
  end

  def create
    @story = Story.create!(story_params)
    @story.pages.create!({title: "Child Page of Story #{@story.title}"})

    render json: @story
  end

  def update
      if @story.update(story_params)
        render json: @story
      else
        render json: @story.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @story.destroy
    @stories = Story.all

    render json: @stories
  end

  private
    def set_story
      @story = Story.find(params[:id])
    end

    # TODO only require title and description
    def story_params
      # params.require(:story).permit(:title, :description, :summary)
      # params.require(:story).permit(:title, :description, :summary, :user_id)
      params.require(:story).permit(:title, :description, :summary, :user_id, :published)
    end
end
