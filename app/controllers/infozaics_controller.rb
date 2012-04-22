class InfozaicsController < ApplicationController
  

  def index
    @infozaics = Infozaic.all
  end

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
    @infobits = Infobit.all
    @youtube_infobit = @infozaic.infobits.new
    @photo_infobit = @infozaic.infobits.new
    @quote_infobit = @infozaic.infobits.new
    @wikipedia_infobit = @infozaic.infobits.new
    @vimeo_infobit = @infozaic.infobits.new
    @article_infobit = @infozaic.infobits.new
    @website_infobit = @infozaic.infobits.new
  end

  def edit
    @infozaic = Infozaic.find(params[:id])
  end


  def update
    @infozaic = Infozaic.find(params[:id])

    respond_to do |format|
      if @infozaic.update_attributes(params[:infozaic])
        format.html { redirect_to @infozaic, notice: 'Infozaic was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @infozaic.errors, status: :unprocessable_entity }
      end
    end
  end


end
