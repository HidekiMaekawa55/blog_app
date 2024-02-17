import Link from "next/link";

export const Blog = (props) => {
  return (
    <div>
      <h2>{props.blog.title}</h2>
      <p>{props.blog.content}</p>
      <Link href={`/blog/${props.blog.id}`}><button>詳細</button></Link>
      <Link href={`/blog/${props.blog.id}/edit`}><button>編集</button></Link>
      <button onClick={() => props.onDelete(props.blog.id)}>削除</button>
    </div>
  );
}
