class ChangeDataTypeForDesc < ActiveRecord::Migration
  def change
  	change_table :infozaics do |t|
      t.change :description, :text
     end
  end
end