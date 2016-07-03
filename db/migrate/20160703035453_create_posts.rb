class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :body
      t.string :photo_url
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :posts, :user_id
  end
end
