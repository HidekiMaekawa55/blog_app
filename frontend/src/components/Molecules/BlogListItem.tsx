import { DeleteButton, DetailButton, EditButton } from "components/atoms/button";
import { BlogListItemProps } from "interfaces/Molecules";

export const BlogListItem = (props: BlogListItemProps) => {
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
