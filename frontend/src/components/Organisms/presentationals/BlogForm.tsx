import { TitleInputField } from "components/Molecules/TitleInputField"
import { ContentTextArea } from "components/Molecules/ContentTextArea"
import { SubmitButton } from "components/atoms/button";
import { BlogFormProps } from "interfaces/Organism";

export const BlogForm = (props: BlogFormProps) => {
  return (
    <div>
      <TitleInputField title={props.title} handleTitleChange={props.handleTitleChange}/>
      <ContentTextArea content={props.content} handleContentChange={props.handleContentChange}/>
      <SubmitButton onSubmit={props.onSubmit} buttonName={props.buttonName}/>
    </div>
  );
}
