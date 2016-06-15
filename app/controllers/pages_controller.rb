class PagesController < ApplicationController
  before_action :set_page, only: [:show, :edit, :update, :destroy]

  def index
    @pages = Page.all

    respond_to do |format|
      format.html
      format.json {render json: Page.all}
    end
  end

  def show
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

    # respond_to do |format|
    #   if @page.save
    #     # format.html { redirect_to @page, notice: 'Page was successfully created.' }
    #     # format.json { render :show, status: :created, location: @page }
    #   else
    #     # format.html { render :new }
    #     # format.json { render json: @page.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  def update
    respond_to do |format|
      if @page.update(page_params)
        format.html { redirect_to @page, notice: 'Page was successfully updated.' }
        format.json { render :show, status: :ok, location: @page }
      else
        format.html { render :edit }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @page.destroy
    respond_to do |format|
      format.html { redirect_to pages_url, notice: 'Page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_page
      @page = Page.find(params[:id])
    end

    def page_params
      params.fetch(:page, {})
    end
end
