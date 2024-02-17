import { Blog } from "interfaces/Blog";

export interface BlogListItemProps {
  blog: Blog;
  onDelete: (blogId: number) => Promise<void>;
}

export interface TitleInputFieldProps {
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ContentTextAreaProps {
  content: string;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface BlogDetailProps {
  blog: Blog;
}

