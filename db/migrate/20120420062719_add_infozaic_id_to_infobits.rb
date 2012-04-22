class AddInfozaicIdToInfobits < ActiveRecord::Migration
  def change
  	 add_column :infobits, :infozaic_id, :integer
  end
end
