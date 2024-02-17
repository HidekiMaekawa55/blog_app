import { BaseTemplate } from 'components/templates/baseTemplate';
import { BlogFormContainer } from 'components/Organisms/containers/BlogFormContainer';

const BlogNew = () => {
  return (
    <BaseTemplate pageTitle="ブログ作成画面" href="/" linkName="トップ画面に戻る">
      <BlogFormContainer buttonName='作成する'/>
    </BaseTemplate>
  );
}

export default BlogNew;
