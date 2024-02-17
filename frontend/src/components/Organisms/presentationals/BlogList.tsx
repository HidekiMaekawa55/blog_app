import { BlogListItem } from "components/Molecules/BlogListItem";

export const BlogList = (props) => {
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
