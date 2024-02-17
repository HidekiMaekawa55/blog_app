import Link from 'next/link';
import {BlogForm} from 'components/forms/blog'

const blogNew = () => {
  return (
    <div>
      <h1>ブログ作成画面</h1>
      <BlogForm buttonName='作成する'/>
      <Link href="/"><button>トップ画面に戻る</button></Link>
    </div>
  );
}

export default blogNew;
