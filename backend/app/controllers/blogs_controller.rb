class BlogsController < ApplicationController
  def index
    @blogs = Blog.all.select(:id, :title, :content)
    render json: @blogs
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end
end
