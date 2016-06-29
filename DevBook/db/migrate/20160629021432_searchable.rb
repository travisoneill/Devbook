class Searchable < ActiveRecord::Migration
  def change
    create_table :searchable do |t|
      t.integer :user_id
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :fullname, null: false
    end
  end
end
