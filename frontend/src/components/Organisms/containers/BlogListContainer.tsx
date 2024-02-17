'use client'

import { BlogList } from "components/Organisms/presentationals/BlogList";
import { BlogListContainerProps } from "interfaces/Organism";
import { deleteBlog } from "utils/blog";

export const BlogListContainer = (props: BlogListContainerProps) => {
  const blogs = props.blogs;

  const handleDelete = async(blogId: number): Promise<void> => {
    await deleteBlog(blogId);
    window.location.href = '/';
  }

  return <BlogList blogs={blogs} onDelete={handleDelete}/>;
};
