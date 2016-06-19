class LandingController < ApplicationController
  def index
    # TODO Replace later. Testing only
    @currentStory = Story.last
  end

  def about
  end
end
