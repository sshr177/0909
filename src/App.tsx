// src/App.tsx 
import styled from 'styled-components';
import PostList from './components/PostList';
import type { NewPost, Post, PostListState } from './types';
import Button from './components/Button';
import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { Comment } from './types';
import CommentItem from './components/CommentItem';

const DUMMY: Post[] = [
  { id: 1, title: '첫 글', content: '반갑습니다', author: '동건' },
  { id: 2, title: '두번째 글', content: '나는야 TS 초고수', author: '선우(최)' },
  { id: 3, title: '영국에서 온 편지를 세진이에게..', content: '언니 진짜 나빠 흥', author: '공주'},
];

const comments: Comment[] = [
  { id: 1, author: '보연', content: '첫 글 축하해요!', createdAt: '2026-09-09',},
  { id: 2, author: '근우', content: 'TS 어렵지만 재밌네요', createdAt: '2026-09-09',},
];

const Title = styled.h1`
  color: #2f6feb;
`;

function App() {
  const [posts, setPosts] = useState<Post[]>(DUMMY);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [commentInput, setCommentInput] = useState('');

  const handleAddPost = () => {
    const newPost: NewPost = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
    };

    if (!newPost.title || !newPost.content || !newPost.author) return;

    setPosts((previousPosts) => [...previousPosts, { ...newPost, id: Date.now() }]);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  }

  const postListState: PostListState = posts.length > 0
    ? { status: 'success', data: posts }
    : { status: 'empty' };

  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" />
      <textarea value={content} onChange={handleContentChange} placeholder="내용을 입력하세요" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="작성자를 입력하세요" />
      <Button label="추가" onClick={handleAddPost} />
      <PostList state={postListState} onSelect={setSelectedPost} />

      {selectedPost === null ? (
        <p>게시글을 선택해주세요.</p>
      ) : (
        <section>
          <p>#{selectedPost.id}</p>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <p>by {selectedPost.author}</p>
        </section>
      )}

      <div>
        <h2>댓글</h2>

        <div>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>

        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={commentInput}
          onChange={handleCommentChange}
        />

        <p>입력 중인 댓글: {commentInput}</p>
      </div>
    </>
  );
}

export default App;
