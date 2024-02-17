import { BaseTemplate } from "components/templates/baseTemplate";
import { BlogDetail } from "components/Molecules/BlogDetail";
import { getBlog } from "utils/blog";

const BlogShow = async ({ params }: { params: { id: number } }) => {
  const blog = await getBlog(params.id)

  return (
    <BaseTemplate pageTitle="Blog詳細画面" href="/" linkName="トップ画面に戻る">
      <BlogDetail blog={blog}/>
    </BaseTemplate>
  );
}

export default BlogShow;
