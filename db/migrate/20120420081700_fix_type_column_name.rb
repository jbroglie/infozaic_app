class FixTypeColumnName < ActiveRecord::Migration
  def change
    rename_column :infobits, :type, :infobit_type
  end
end
