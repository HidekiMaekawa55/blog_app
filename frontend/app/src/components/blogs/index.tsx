import Link from "next/link";

export const Blogs = async () => {
  const res = await fetch("http://api:3000/blogs", { cache: 'no-store' });
  const blogs = await res.json();

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link href={`/blog/${blog.id}`}><button>詳細</button></Link>
            <Link href={`/blog/${blog.id}/edit`}><button>編集</button></Link>
            <button>削除</button>
          </div>
        );
      })}
    </div>
  );
}
