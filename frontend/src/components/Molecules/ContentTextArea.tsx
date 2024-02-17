export const ContentTextArea = (props) => {
  return (
    <div>
      <label>本文</label><br/>
      <textarea value={props.content} onChange={props.handleContentChange}/>
    </div>
  );
}
