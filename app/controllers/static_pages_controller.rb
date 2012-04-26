class StaticPagesController < ApplicationController
  def home
    @user = User.new
    @infobits = Infobit.find(:all, :order => "created_at ASC", :limit => 10)
  end


  def about
  end

  def list
  end

  def create
  end

  def profile
  end

  def single
  end

end
