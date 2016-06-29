class CreateRequestings < ActiveRecord::Migration
  def change
    drop_table :requests
    create_table :requestings do |t|
      t.integer  "initiator_id", null: false
      t.integer  "recipient_id", null: false
      t.timestamps null: false
    end
  end
end
