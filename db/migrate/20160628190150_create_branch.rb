class CreateBranch < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.integer :parent_id
      t.integer :destination_id
      t.string :choice_text

      t.references :story, index: true, foreign_key: true
      t.references :page, index: true, foreign_key: true
    end
  end
end
