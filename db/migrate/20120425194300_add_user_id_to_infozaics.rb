class AddUserIdToInfozaics < ActiveRecord::Migration
  def up
  	add_column :infozaics, :user_id, :integer
  	Infozaic.all.each do |infozaic|
  		infozaic.update_attributes(:user_id => 1)
  	end
  end

  def down
  	remove_column :infozaics, :user_id
  end
end
