import { ContentTextAreaProps } from "interfaces/Molecules";

export const ContentTextArea = (props: ContentTextAreaProps) => {
  return (
    <div>
      <label>本文</label><br/>
      <textarea value={props.content} onChange={props.handleContentChange}/>
    </div>
  );
}
