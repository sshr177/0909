import type { Post, PostListState } from '../types';
import PostItem from './PostItem';

interface PostListProps {
  state: PostListState;
  onSelect: (post: Post) => void;
}

function PostList({ state, onSelect }: PostListProps) {
  if (state.status === 'loading') {
    return <p>게시글을 불러오는 중입니다.</p>;
  }

  if (state.status === 'error') {
    return <p>게시글을 불러오지 못했습니다: {state.message}</p>;
  }

  if (state.status === 'empty') {
    return <p>아직 게시글이 없습니다.</p>;
  }

  return (
    <div>
      {state.data.map((post) => (
        <PostItem key={post.id} post={post} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default PostList;
