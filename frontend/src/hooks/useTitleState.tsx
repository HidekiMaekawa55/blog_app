import { ChangeEvent, useState } from "react";

type TitleState = [string, (e: ChangeEvent<HTMLInputElement>) => void];
export const useTitleState = (defaultValue = ''): TitleState => {
  const [title, setTitle] = useState<string>(defaultValue);
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      return alert('タイトルは10文字以内で入力してください')
    }
    setTitle(e.target.value)
  }

  return [title, handleTitleChange]
}
