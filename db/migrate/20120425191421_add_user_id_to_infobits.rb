class AddUserIdToInfobits < ActiveRecord::Migration
  def up
  	add_column :infobits, :user_id, :integer
  	Infobit.all.each do |infobit|
  		infobit.update_attributes(:user_id => 1)
  	end
  end

  def down
  	remove_column :infobits, :user_id
  end
end
