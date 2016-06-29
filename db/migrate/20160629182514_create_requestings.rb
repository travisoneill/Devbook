class CreateRequestings < ActiveRecord::Migration
  def change
    create_table :requestings do |t|
      t.integer  :initiator_id, null: false
      t.integer  :recipient_id, null: false
      t.timestamps null: false
    end
    add_index :requestings, :initiator_id
    add_index :requestings, :recipient_id
  end
end
