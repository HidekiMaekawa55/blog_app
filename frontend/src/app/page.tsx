import { BaseTemplate } from "components/templates/baseTemplate";
import { BlogListContainer } from "components/Organisms/containers/BlogListContainer";
import { getBlogs } from "utils/blog";

const Home = async () => {
  const blogs = await getBlogs();

  return (
    <BaseTemplate pageTitle="Blogアプリ" href="/blog/new" linkName="新規作成画面">
      <BlogListContainer blogs={blogs}/>
    </BaseTemplate>
  );
}

export default Home;
