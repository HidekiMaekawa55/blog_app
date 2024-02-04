import Link from 'next/link';
import {BlogForm} from 'components/forms/blog'

const blogEdit = async ({params}) => {
  const res = await fetch(`http://api:3000/blogs/${params.slug}`, { cache: 'no-store' });
  const blog = await res.json();

  return (
    <div>
      <h1>ブログ編集画面</h1>
      <BlogForm buttonName='更新する' blog={blog} />
      <Link href="/"><button>トップ画面に戻る</button></Link>
    </div>
  );
}

export default blogEdit;
