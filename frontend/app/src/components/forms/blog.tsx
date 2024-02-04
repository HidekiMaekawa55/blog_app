'use client'
import {useTitleState} from 'hooks/useTitleState'
import {useContentState} from 'hooks/useContentState'

export const BlogForm = (props) => {
  const [title, handleTitleChange] = useTitleState(props.blog?.title);
  const [content, handleContentChange] = useContentState(props.blog?.content);

  const submitForm = () => {
    try {
      if (props.blog === undefined) {
        const response = fetch("http://localhost:3004/blogs", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, content })
        });
      } else {
        const response = fetch(`http://localhost:3004/blogs/${props.blog.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, content })
        });
      }
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p>タイトル</p>
      <input type="text" value={title} onChange={handleTitleChange}/>
      <p>本文</p>
      <textarea value={content} onChange={handleContentChange}/><br />
      <button onClick={submitForm}>{props.buttonName}</button><br />
    </div>
  );
}
