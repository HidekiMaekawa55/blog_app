import { Blogs } from "components/blogs";
import Link from "next/link";

const home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blogアプリ</h1>
      <Link href="/create_blog"><button>新規作成画面</button></Link>
      <Blogs />
    </main>
  );
}

export default home;