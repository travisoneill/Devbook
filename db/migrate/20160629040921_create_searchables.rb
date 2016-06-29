class CreateSearchables < ActiveRecord::Migration
  def change
    create_table :searchables do |t|
      t.integer :user_id, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :fullname, null: false
      t.timestamps null: false
    end
    add_index :searchables, :fname
    add_index :searchables, :lname
    add_index :searchables, :fullname
    add_index :searchables, :user_id
  end
end
