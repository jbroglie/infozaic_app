class CreateInfozaics < ActiveRecord::Migration
  def change
    create_table :infozaics do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
