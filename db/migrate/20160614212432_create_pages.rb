class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.text :title
      t.text :summary
      t.text :content
      t.integer :parent_id
      t.string :choice_text
      t.text :content
      t.timestamps null: false
      t.timestamps null: false

      t.references :story, index: true, foreign_key: true
      # Branch or parent branch?
      # t.references :branch, index: true, foreign_key: true
      # t.references :parent_page, index: true, foreign_key: true
      t.boolean :complete, default: false
    end
  end
end
