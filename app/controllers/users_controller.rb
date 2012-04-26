class UsersController < ApplicationController

  before_filter :correct_user, only: [:edit, :update]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      sign_in @user
      redirect_to @user
      flash[:success] = "Welcome to Infozaic, " + @user.name + "!"
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'Your profile was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  private
    
    #signed_in_user method in the Sessions helper

    def correct_user
      @user = User.find(params[:id])
      unless current_user.id == @user.id #trying to access a page that does not belong to me ! 
        flash[:notice] = "You need to be signed in as this user to update their contents."
        redirect_to root_path
      end
    end

=begin 
    def admin_user
      redirect_to(root_path) unless current_user.admin? #if current user is not admin, redirect to root path
    end
=end
  
end
