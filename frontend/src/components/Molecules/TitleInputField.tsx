export const TitleInputField = (props) => {
  return (
    <div>
      <label>タイトル</label><br/>
      <input type="text" value={props.title} onChange={props.handleTitleChange}/>
    </div>
  );
}
