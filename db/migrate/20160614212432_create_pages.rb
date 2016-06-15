class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.text :title
      t.text :summary
      t.text :content
      t.text :page_id
      t.text :content
      t.timestamps null: false

      t.references :story, index: true, foreign_key: true
      t.references :page, index: true, foreign_key: true
    end
  end
end
