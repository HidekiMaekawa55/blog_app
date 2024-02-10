'use client'
import Link from "next/link";

const handleDelete = async(blog_id) => {
  await fetch(`http://localhost:3004/blogs/${blog_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  window.location.href = '/';
}

export const Blog = (props) => {
  return (
    <div>
      <h2>{props.blog.title}</h2>
      <p>{props.blog.content}</p>
      <Link href={`/blog/${props.blog.id}`}><button>詳細</button></Link>
      <Link href={`/blog/${props.blog.id}/edit`}><button>編集</button></Link>
      <button onClick={() => handleDelete(props.blog.id)}>削除</button>
    </div>
  );
}