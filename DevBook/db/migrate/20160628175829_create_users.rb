class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :full_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :dob
      t.string :profile_pic_url
      t.string :cover_pic_url
      t.string :gender
      t.timestamps null: false
    end
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :session_token, unique: true
  end
end
