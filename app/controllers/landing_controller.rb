class LandingController < ApplicationController
  def index
    # TODO Replace later. Testing only
    @currentStory = Story.last
    # @currentStory = @currentStory.as_json

    # render json: @currentStory
  end

  def about
  end
end
