import { Blogs } from "components/blogs";

const home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blogアプリ</h1>
      <Blogs />
    </main>
  );
}

export default home;