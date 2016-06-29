class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :initiator_id, null: false
      t.integer :recipient_id, null: false
      t.timestamps null: false
    end
  end
end
