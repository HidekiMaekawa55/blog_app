import { ChangeEvent, useState } from "react";

type ConSttentate = [string, (e: ChangeEvent<HTMLTextAreaElement>) => void];
export const useContentState = (defaultValue = ''): ConSttentate => {
  const [content, setContent] = useState<string>(defaultValue);
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return [content, handleContentChange]
}
