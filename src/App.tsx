// src/App.tsx 
import styled from 'styled-components';
import PostItem from './components/PostItem';
import type { Post } from './types';
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

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [commentInput, setCommentInput] = useState('');

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  }

  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" />
      <p>입력 중: {title}</p>
      <textarea value={content} onChange={handleContentChange} />
      <p>textarea 입력 중인 내용 : {content} </p>
      <Button label="확인" onClick={() => alert("버튼 클릭테스트!")} />
      {DUMMY.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

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