class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.integer :initiator_id, null: false
      t.integer :recipient_id
      t.string :action_type, null: false
      t.string :subtype
      t.timestamps null: false
    end
    add_index :actions, :initiator_id
    add_index :action_type
    add_index :actions, :recipient_id
  end
end
