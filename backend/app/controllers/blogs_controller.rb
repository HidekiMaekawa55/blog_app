class BlogsController < ApplicationController
  def index
    @blogs = Blog.all.select(:id, :title, :content)
    render json: @blogs
  end

  def new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render status: :created
    else
      render status: :error
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :content)
  end
end
