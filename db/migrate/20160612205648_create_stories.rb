class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.string :description
      t.string :summary
      t.string :keywords #NOTE convert this string to array?
      t.string :system
      t.float :rating

      # t.references :user,
    end
  end
end
