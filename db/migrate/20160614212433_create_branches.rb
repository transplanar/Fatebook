class CreateBranches < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.text :choice_text
      t.timestamps null: false
    end
  end
end
