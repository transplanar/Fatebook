class CreateBranches < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.text :choice_text
      t.references :story, index: true, foreign_key: true
      t.references :page, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
