class BranchesController < ApplicationController
  def index
    # @branches = Branch.all
    # render json: @branches
    # @branches = Branch.where(destination_id: params[:destination_id])
    @branches = []

    # Branch.where(destination_id: params[:destination_id]).find_each do |branch|
    Branch.where(destination_id: params[:destination_id]).find_each do |branch|
      @branches.push branch
    end

    render json: @branches
  end

  def show
    @branch = Branch.where(destination_id: params[:destination_id])

    render json: @branch
    # @branches = Branch.find(branch_params)

    # render json: @branches
  end

  private

  def branch_params
    # params.require(:branch).permit(:parent_id, :destination_id)
  end
end
