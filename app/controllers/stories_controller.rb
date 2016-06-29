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
    # @story = Story.new(story_params)
    @story = Story.create!(story_params)
    # @story.save
    @story.pages.create!({title: "Child Page of Story #{@story.title}"})

    render json: @story
    # TODO below
    # @page = @story.pages...

    # respond_to do |format|
      # if @story.save
        # format.html { redirect_to @story, notice: 'Story was successfully created.' }
        # format.json { render :show, status: :created, location: @story }
      # else
        # format.html { render :new }
        # format.json { render json: @story.errors, status: :unprocessable_entity }
        # render json: @story
      # end
    # end
  end

  def update
    # respond_to do |format|
      if @story.update(story_params)
        # format.html { redirect_to @story, notice: 'Story was successfully updated.' }
        # format.json { render :show, status: :ok, location: @story }
        render json: @story
      else
        # format.html { render :edit }
        # format.json { render json: @story.errors, status: :unprocessable_entity }
        render json: @story.errors, status: :unprocessable_entity
      end
    # end
  end

  def destroy
    @story.destroy
    respond_to do |format|
      format.html { redirect_to stories_url, notice: 'Story was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_story
      @story = Story.find(params[:id])
    end

    def story_params
      # REVIEW is :pages correct here?
      params.require(:story).permit(:title, :description, :summary)
    end
end
