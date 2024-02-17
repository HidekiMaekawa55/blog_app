import { BlogListItem } from "components/Molecules/BlogListItem";
import { BlogListProps } from "interfaces/Organism";

export const BlogList = (props: BlogListProps) => {
  return (
    <div>
      {props.blogs.map((blog) => {
        return(
          <BlogListItem key={blog.id} blog={blog} onDelete={props.onDelete} />
        );
      })}
    </div>
  );
}
