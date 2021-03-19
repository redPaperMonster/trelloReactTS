import * as React from 'react';
import { useState } from 'react'
import { CommentsType } from '../../App';
import { CommentItemWrapper, CommentAuthor, CommentText, CommentInfoWrapper, ButtonWrapper } from './CommentsStyles';
import { Button, Input } from ".."

interface Props {
    comment: CommentsType,
    handleDeleteComment: (id: string) => void,
    handleUpdateComment: (updatedComment: CommentsType) => void
}

const CommentItem: React.FC<Props> = ({
    comment,
    handleDeleteComment,
    handleUpdateComment }) => {

    const [showCommentRedact, setCommentRedact] = useState<boolean>(false)
    const [newCommentText, setNewCommentText] = useState<string>(comment.text)

    const saveChanges = () => {
        handleUpdateComment({ id: comment.id, cardId: comment.cardId, text: newCommentText, author: comment.author })
        setCommentRedact(false)
    }

    const handleOnClick = () => {
        showCommentRedact ? saveChanges() : setCommentRedact(true)
    }

    const commentInfo = <CommentInfoWrapper>
        <CommentAuthor>{comment.author}:</CommentAuthor>
        <CommentText>{comment.text}</CommentText>
    </CommentInfoWrapper>
    const commentRedact = <CommentInfoWrapper>
        <CommentAuthor>{comment.author}:</CommentAuthor>
        <Input
            value={newCommentText}
            onChange={e => setNewCommentText(e.currentTarget.value)} />
    </CommentInfoWrapper>

    return (
        <CommentItemWrapper>
            {showCommentRedact ? commentRedact : commentInfo}
            <ButtonWrapper>
                <Button
                    style="margin-right: 5px;"
                    onClick={handleOnClick}
                    text={showCommentRedact ? '💾' : '✎'} />
                <Button
                    onClick={() => handleDeleteComment(comment.id)}
                    text="🗑" />
            </ButtonWrapper>
        </CommentItemWrapper>
    )
}

export default CommentItem;