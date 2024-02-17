import { DeleteButton, DetailButton, EditButton } from "components/atoms/button";

export const Blog = (props) => {
  return (
    <div>
      <h2>{props.blog.title}</h2>
      <p>{props.blog.content}</p>
      <DetailButton href={`/blog/${props.blog.id}`}/>
      <EditButton href={`/blog/${props.blog.id}/edit`}/>
      <DeleteButton onClick={() => props.onDelete(props.blog.id)}/>
    </div>
  );
}
