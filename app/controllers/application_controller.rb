class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # REVIEW this was changed. What does null_session do exactly?
  protect_from_forgery with: :null_session,
    # REVIEW what does this do? I forgot
    if: Proc.new { |c| c.request.format =~ %r{application/json} }

  include SessionsHelper
end
