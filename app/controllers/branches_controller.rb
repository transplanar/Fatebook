# FIXME set up custom rails routes for this
class BranchesController < ApplicationController
  def index
    @branches = []

    Branch.where(destination_id: params[:destination_id]).find_each do |branch|
      @branches.push branch
    end

    render json: @branches
  end

  def show
    @branch = Branch.where(destination_id: params[:destination_id])

    render json: @branch
  end
end
