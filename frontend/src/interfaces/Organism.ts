import { Blog } from "interfaces/Blog";

export interface BlogListContainerProps {
  blogs: Blog[];
}

export interface BlogListProps {
  blogs: Blog[];
  onDelete: (id: number) => Promise<void>;
}

export interface BlogFormContainerProps {
  blog?: Blog
  buttonName: string;
}

export interface BlogFormProps {
  title: string;
  content: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  buttonName: string;
}
