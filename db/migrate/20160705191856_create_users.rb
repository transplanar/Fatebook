class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest

      t.timestamps null: false
      t.integer :last_page_edit_id
      t.integer :last_page_edit_story_id
      t.integer :last_page_play_id
      t.integer :last_page_play_story_id
    end
  end
end
