class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # NOTE more proper way to do it?
  # respond_to :json
  # def angular
  #   render 'layouts/application'
  # end
end
