import { useState } from "react";

export const useContentState = () => {
  const [content, setContent] = useState('');
  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  return [content, handleContentChange]
}
