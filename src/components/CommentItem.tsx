import styled from "styled-components";
import type { Comment } from "../types";

interface CommentItemProps {
    comment: Comment;
}

const Card = styled.div`
    margin-bottom: 12px;
    padding: 16px 20px;
    background: #f8fafc;
    border-left: 4px solid #dce3ee;
`


const Author = styled.strong`
    margin-right: 12px;
`;

const DateText = styled.span`
    color: #8b95a5;
`;

const Content = styled.p`
    margin: 8px 0 0;
`;

function CommentItem ({comment} : CommentItemProps) {
    return (
        <Card>
            <div>
                <Author>{comment.author}</Author>
                <DateText>{comment.createdAt}</DateText>
            </div> 
            <Content>{comment.content}</Content>
        </Card>
    );
}

export default CommentItem;