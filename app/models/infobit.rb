class Infobit < ActiveRecord::Base
  attr_accessible :columns, :description, :dislikes_count, :height, :likes_count, :link, :subtitle, :title, :type, :width
end
