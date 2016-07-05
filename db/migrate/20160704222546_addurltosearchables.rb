class Addurltosearchables < ActiveRecord::Migration
  def change
    add_column :searchables, :profile_pic_url, :string
  end
end
