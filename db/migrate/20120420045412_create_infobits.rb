class CreateInfobits < ActiveRecord::Migration
  def change
    create_table :infobits do |t|
      t.string :title
      t.string :subtitle
      t.text :description
      t.text :link
      t.string :type
      t.integer :columns
      t.integer :likes_count
      t.integer :dislikes_count
      t.integer :width
      t.integer :height

      t.timestamps
    end
  end
end
