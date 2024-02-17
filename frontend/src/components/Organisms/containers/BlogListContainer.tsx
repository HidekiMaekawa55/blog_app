'use client'

import { BlogList } from "components/Organisms/presentationals/BlogList";
import { deleteBlog } from "utils/blog";

export const BlogListContainer = (props) => {
  const blogs = props.blogs;

  const handleDelete = async(blogId) => {
    await deleteBlog(blogId);
    window.location.href = '/';
  }

  return <BlogList blogs={blogs} onDelete={handleDelete}/>;
};
