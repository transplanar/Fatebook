# FIXME set up custom rails routes for this
class BranchesController < ApplicationController
  def index
    @branches = Branch.where(story_id: params[:story_id])

    render json: @branches
  end

  def destroy
    @branch = Branch.find(params[:id])
    @parent_page = @branch.parent_page
    @branch.destroy

    render json: @parent_page
  end

  def find_by_destination
    @branch = Branch.find_by(destination_id: params[:id])

    render json: @branch
  end
end
