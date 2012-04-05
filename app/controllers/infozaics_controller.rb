class InfozaicsController < ApplicationController
  def new
  	@infozaic = Infozaic.new 
  end

  def create
  	@infozaic = Infozaic.new(params[:infozaic])

	if @infozaic.save
		redirect_to @infozaic
	#else

	end

  end

  def show
    @infozaic = Infozaic.find(params[:id])
  end

  def edit
  end
end
