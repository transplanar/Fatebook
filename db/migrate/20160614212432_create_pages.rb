class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.text :title
      t.text :summary
      t.text :content
      t.text :page_id
      t.text :content
      t.references :branch, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
