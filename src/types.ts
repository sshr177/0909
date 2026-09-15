export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface Comment{
  id: number;
  author: string;
  content: string;
  createdAt: string;
}