class CreateSearchables < ActiveRecord::Migration
  def change
    drop_table :searchable
    create_table :searchables do |t|
      t.integer :user_id, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :fullname, null: false
      t.timestamps null: false
    end
  end
end
