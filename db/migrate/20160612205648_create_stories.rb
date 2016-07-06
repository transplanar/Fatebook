class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.string :description
      t.string :summary
      t.string :keywords #NOTE convert this string to array?
      t.string :system
      t.float :rating

      t.boolean :published

      # REVIEW is this needed?
    end
  end
end
