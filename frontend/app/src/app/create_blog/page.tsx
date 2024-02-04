'use client'
import {useTitleState} from 'hooks/useTitleState'
import {useContentState} from 'hooks/useContentState'

const createBlog = () => {
  const [title, handleTitleChange] = useTitleState();
  const [content, handleContentChange] = useContentState();

  const submitForm = () => {
    try {
      const response = fetch("http://localhost:3004/blogs", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      });
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>ブログ作成画面</h1>
      <p>タイトル</p>
      <input type="text" value={title} onChange={handleTitleChange}/>
      <p>本文</p>
      <textarea value={content} onChange={handleContentChange}/><br />
      <button onClick={submitForm}>作成</button>
    </div>
  );
}

export default createBlog;
