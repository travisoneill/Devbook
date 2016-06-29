class Fixaction2 < ActiveRecord::Migration
  def change
    remove_column :actions, :type
    add_column :actions, :action_type, :string
  end
end
