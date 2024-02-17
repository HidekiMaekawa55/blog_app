import { Blog } from "components/blog";

export const BlogList = (props) => {
  return (
    <div>
      {props.blogs.map((blog) => {
        return(
          <Blog key={blog.id} blog={blog} onDelete={props.onDelete} />
        );
      })}
    </div>
  );
}
