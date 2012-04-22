class AddSourceToInfobits < ActiveRecord::Migration
  def change
  	 add_column :infobits, :source, :string
  end
end
