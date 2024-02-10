import Link from "next/link";

const blogShow = async ({params}) => {
  const res = await fetch(`http://api:3000/blogs/${params.slug}`, { cache: 'no-store' });
  const blog = await res.json();

  return (
    <div>
      <h1>ブログ詳細画面</h1>
      <h2>タイトル：{blog.title}</h2>
      <p>コンテント：{blog.content}</p>
      <p>作成日：{blog.created_at}</p>
      <Link href="/"><button>トップ画面に戻る</button></Link>
    </div>
  );
}

export default blogShow;
