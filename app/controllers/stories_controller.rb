class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :edit, :update, :destroy]

  def index
    render json: Story.all
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

    def story_params
      params.require(:story).permit(:title, :description, :summary)
    end
end
