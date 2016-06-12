class StoriesController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json {render json: Story.all}
    end
  end
end
