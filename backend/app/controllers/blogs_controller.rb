class BlogsController < ApplicationController
  def index
    @blogs = Blog.all.select(:id, :title, :content)
    render json: @blogs
  end

  def show
    @blog = Blog.select(:id, :title, :content, :created_at).find(params[:id])
    render json: @blog
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render status: :created
    else
      render status: :error
    end
  end

  def update
    @blog = Blog.find(params[:id])
    if @blog.update(blog_params)
      render status: :ok
    else
      render status: :error
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    if @blog.delete
      render status: :ok
    else
      render status: :error
    end
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :content)
  end
end
