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

export type NewPost = Omit<Post, 'id'>;

export type PostListState =
  | { status: 'loading' }
  | { status: 'success'; data: Post[] }
  | { status: 'error'; message: string }
  | { status: 'empty' };
