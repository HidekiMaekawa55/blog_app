import { BaseTemplate } from "components/templates/baseTemplate";
import { BlogListContainer } from "components/Organisms/containers/BlogListContainer";
import { getBlogs } from "utils/blog";
import { Blog } from "interfaces/Blog";


const Home = async () => {
  const blogs: Blog[] = await getBlogs();

  return (
    <BaseTemplate pageTitle="Blogアプリ" href="/blogs/new" linkName="新規作成画面">
      <BlogListContainer blogs={blogs}/>
    </BaseTemplate>
  );
}

export default Home;
