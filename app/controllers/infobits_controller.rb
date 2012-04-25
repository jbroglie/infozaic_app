class InfobitsController < ApplicationController
  


	def index
	    @infobits = Infobit.all
	  end

	def new
		@infozaic = Infozaic.find(params[:infozaic_id])
 		@infobit = @infozaic.build_infobit
	end

	def create
		@infozaic = Infozaic.find(params[:infozaic_id])
 		@infobit = @infozaic.infobits.create(params[:infobit])

		if @infobit.save
			flash[:success] = "Infobit created!"
			redirect_to :back
		else
			flash[:error] = "Error creating infobit!"
			redirect_to :back
		end
	end

	def destroy
	    @infozaic = Infozaic.find(params[:infozaic_id])
 		@infobit = Infobit.find(params[:id])
	    @infobit.destroy
	    flash[:notice] = "Your infobit was successfully destroyed."
	    redirect_to @infozaic
	  end


end
