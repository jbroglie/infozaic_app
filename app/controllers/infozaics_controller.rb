class InfozaicsController < ApplicationController
  

  def index
    @search = params[:s]
    #@infozaics = Infozaic.search(params[:s])
    @infozaics = Infozaic.paginate(:page => params[:page], 
                                  :per_page => 10,
                                  :conditions => ['UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)',
                                  "%#{@search}%", "%#{@search}%"],)
  end

  def new
    if !signed_in?
      flash[:notice] = "You must be signed in to do that!"
      redirect_to root_path
    else
      @infozaic = Infozaic.new 
    end
  end

  def create
  	@infozaic = Infozaic.new(params[:infozaic])

  	if @infozaic.save
  		redirect_to @infozaic
  	else
      render 'new'
  	end
  end

  def show
    @infozaic = Infozaic.find(params[:id])
    @infobits = @infozaic.infobits
    @youtube_infobit = @infozaic.infobits.new
    @photo_infobit = @infozaic.infobits.new
    @quote_infobit = @infozaic.infobits.new
    @wikipedia_infobit = @infozaic.infobits.new
    @vimeo_infobit = @infozaic.infobits.new
    @article_infobit = @infozaic.infobits.new
    @website_infobit = @infozaic.infobits.new
  end



  def embed
    @infozaic = Infozaic.find(params[:id])
    @infobits = @infozaic.infobits
    @youtube_infobit = @infozaic.infobits.new
    @photo_infobit = @infozaic.infobits.new
    @quote_infobit = @infozaic.infobits.new
    @wikipedia_infobit = @infozaic.infobits.new
    @vimeo_infobit = @infozaic.infobits.new
    @article_infobit = @infozaic.infobits.new
    @website_infobit = @infozaic.infobits.new
  end



  def edit
    if !signed_in?
      flash[:notice] = "You must be signed in to do that!"
      redirect_to root_path
    else
      @infozaic = Infozaic.find(params[:id])
    end
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

  def destroy

    if !signed_in?
      flash[:notice] = "You must be signed in to do that!"
      redirect_to root_path
    else
      @infozaic = Infozaic.find(params[:id])
      @infozaic.destroy
      flash[:notice] = "Your infozaic was successfully destroyed."
      redirect_to infozaics_path
    end
  end

  private
  
  def get_full_url
    return url_for(self, :only_path => false)
  end


end
