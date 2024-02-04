'use client'
import {useTitleState} from 'hooks/useTitleState'
import {useContentState} from 'hooks/useContentState'

const createBlog = () => {
  const [title, handleTitleChange] = useTitleState();
  const [content, handleContentChange] = useContentState();

  const submitBlog = () => {
    console.log(title, content);
  }

  return (
    <div>
      <h1>ブログ作成画面</h1>
      <p>タイトル</p>
      <input type="text" value={title} onChange={handleTitleChange}/>
      <p>本文</p>
      <textarea value={content} onChange={handleContentChange}/><br />
      <button onClick={submitBlog}>作成</button>
    </div>
  );
}

export default createBlog;
