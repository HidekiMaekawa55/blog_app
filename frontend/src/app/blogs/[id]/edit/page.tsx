import { BaseTemplate } from 'components/templates/baseTemplate';
import { BlogFormContainer } from 'components/Organisms/containers/BlogFormContainer';
import { getBlog } from 'utils/blog';

const BlogEdit = async ({ params }: { params: { id: number } }) => {
  const blog = await getBlog(params.id);

  return (
    <div>
      <BaseTemplate pageTitle="ブログ編集画面" href="/" linkName="トップ画面に戻る">
        <BlogFormContainer buttonName='更新する' blog={blog} />
      </BaseTemplate>
    </div>
  );
}

export default BlogEdit;
