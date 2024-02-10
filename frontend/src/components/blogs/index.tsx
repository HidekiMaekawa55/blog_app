import { Blog } from "components/blog";

export const Blogs = async () => {
  const res = await fetch("http://api:3000/blogs", { cache: 'no-store' });
  const blogs = await res.json();

  return (
    <div>
      {blogs.map((blog) => {
        return(
          <Blog key={blog.id} blog={blog} />
        );
      })}
    </div>
  );
}
