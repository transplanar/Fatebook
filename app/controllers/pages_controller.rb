class PagesController < ApplicationController
  before_action :set_page, only: [:show, :edit, :update, :destroy]

  # REVIEW change to custom route?
  def index
    if(params[:story_id])
      @pages = Page.where(story_id: params[:story_id]);
    end

    render json: @pages
  end

  def show
    render json: @page
  end

  def new
    @story = Story.find(params[:story_id])
    @page = Page.new
  end

  def edit
  end

  def create
    @story = Story.find(params[:story_id])
    @page = @story.pages.build(page_params)

    @parent = Page.find(params[:parent_id]);

    if @page.save!
      if(params[:parent_id] && params[:choice_text])
        @parent = Page.find(params[:parent_id]);
        @branch = @parent.branches.build(destination_id: @page.id, choice_text: params[:choice_text])

        if !@branch.save
          render json: { error: "Error saving page", status: 400 }, status: 400
        end

        if !@parent.save
          render json: { error: "Error saving page", status: 400 }, status: 400
        end
      end

      render json: @page, status: 201
    end
  end

  def update
    if @page.update(page_params)
      render json: @page
    else
      render json: @page.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if(params[:parent_id])
      @parent = Page.find(params[:parent_id]);
    end

    @page.destroy

    render json: @parent
  end

  private
    def set_page
      @page = Page.find(params[:id])
    end

    # TODO update for proper reqs and permits
    # TODO only require content
    def page_params
      # params.require(:page).permit(:title, :content, :summary, :parent_id)
      # TODO add story_id
      params.require(:page).permit(:title, :content, :summary, :parent_id, :complete)
    end
end
