export interface Blog {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export interface BlogParams {
  title: string;
  content: string;
}
