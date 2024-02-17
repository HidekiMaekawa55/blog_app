'use client'

import { BlogForm } from 'components/Organisms/presentationals/BlogForm';
import { useTitleState } from 'hooks/useTitleState'
import { useContentState } from 'hooks/useContentState'
import { createBlog, updateBlog } from 'utils/blog';

export const BlogFormContainer = (props) => {
  const [title, handleTitleChange] = useTitleState(props.blog?.title);
  const [content, handleContentChange] = useContentState(props.blog?.content);

  const handleSubmit = () => {
    try {
      if (props.blog === undefined) {
        createBlog({ title, content });
      } else {
        updateBlog(props.blog.id, { title, content });
      }
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BlogForm 
      title={title}
      content={content}
      handleTitleChange={handleTitleChange}
      handleContentChange={handleContentChange}
      onSubmit={handleSubmit}
      buttonName={props.buttonName}
    />
  );
}
