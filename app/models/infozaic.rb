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
  attr_accessible :description, :title


  has_many :infobits


end
