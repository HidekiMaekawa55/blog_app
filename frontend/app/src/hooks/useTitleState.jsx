import { useState } from "react";

export const useTitleState = (defaultValue) => {
  const [title, setTitle] = useState(defaultValue || '');
  const handleTitleChange = (e) => {
    if (e.target.value.length > 10) {
      return alert('タイトルは10文字以内で入力してください')
    }
    setTitle(e.target.value)
  }

  return [title, handleTitleChange]
}
