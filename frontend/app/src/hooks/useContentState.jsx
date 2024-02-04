import { useState } from "react";

export const useContentState = (defaultValue) => {
  const [content, setContent] = useState(defaultValue || '');
  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  return [content, handleContentChange]
}
