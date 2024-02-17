import { BlogDetailProps } from "interfaces/Molecules";

export const BlogDetail = (props: BlogDetailProps) => {
  return (
    <div>
      <h2>タイトル：{props.blog.title}</h2>
      <p>コンテント：{props.blog.content}</p>
      <p>作成日：{props.blog.created_at}</p>
    </div>
  );
}
