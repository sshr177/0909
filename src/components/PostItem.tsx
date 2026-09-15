// PostItem.tsx — 최종본
import styled from 'styled-components';
import type { Post } from '../types';

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  return (
    <Card>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <Author>by {post.author}</Author>
    </Card>
  );
}


const Card = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333333;
`;

const Content = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666666;
`;

const Author = styled.small`
  font-size: 12px;
  color: #999999;
`;

export default PostItem;