# == Schema Information
#
# Table name: infozaics
#
#  id          :integer         not null, primary key
#  title       :string(255)
#  description :text
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#

class Infozaic < ActiveRecord::Base
  attr_accessible :description, :title, :user_id


  has_many :infobits, :dependent => :destroy
  belongs_to :user

  validates :title, presence:   true,
  					length: { maximum: 255 }
  validates :description, 	presence:   true,
  							length: { maximum: 1000 }

  def to_param
  	"#{id}-#{title.gsub(' ', '-')}"
  end


	def self.search(search, page)
		if (search)
			paginate :per_page => 10, 
				     :page => page,
					 :conditions => ['UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)',
				                          "%#{search}%", "%#{search}%"],
				     :orcer => 'title'
		else
			find(:all)
		end
	end

end
