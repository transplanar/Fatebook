class CreateBranch < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.integer :parent_id
      t.integer :destination_id
      t.string :choice_text
    end
  end
end
