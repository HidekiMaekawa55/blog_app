import { TitleInputFieldProps } from "interfaces/Molecules";

export const TitleInputField = (props: TitleInputFieldProps) => {
  return (
    <div>
      <label>タイトル</label><br/>
      <input type="text" value={props.title} onChange={props.handleTitleChange}/>
    </div>
  );
}
