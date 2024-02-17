import { DeleteButton, DetailButton, EditButton } from "components/atoms/button";

export const BlogListItem = (props) => {
  return (
    <div>
      <h2>{props.blog.title}</h2>
      <p>{props.blog.content}</p>
      <DetailButton href={`/blogs/${props.blog.id}`}/>
      <EditButton href={`/blogs/${props.blog.id}/edit`}/>
      <DeleteButton onClick={() => props.onDelete(props.blog.id)}/>
    </div>
  );
}
