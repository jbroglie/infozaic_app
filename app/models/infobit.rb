class Infobit < ActiveRecord::Base
  attr_accessible :columns, :description, :dislikes_count, :height, :width, :likes_count, :link, :subtitle, :title, :infobit_type, :source

  #one to many relationship with the Infozaic model
  belongs_to :infozaic

  after_initialize :init

	def init
		self.likes_count = 0
		self.dislikes_count = 0
	end
end
