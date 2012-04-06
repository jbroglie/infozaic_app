class UsersController < ApplicationController
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
  
end
