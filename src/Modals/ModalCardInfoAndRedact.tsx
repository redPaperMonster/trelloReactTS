
import React, { useState } from 'react'
import { CardType, CommentsType } from '../App';
import { Modal, Button, Input, CommentItem } from '../Components';
import { CardDescr, CardInfoWrapper, CardInputWrapper, CardModalDescr, CardRedactWrapper, CardTitle, CommentsWrapper, CommentTextarea, SendCommentWrapper } from './ModalsStyles';

interface Props {
  isOpen: boolean,
  columnTitle: string,
  close: () => void,
  card: CardType,
  comments: Array<CommentsType>,
  userName: string,
  handleUpdateCard: (updatedCard: CardType) => void,
  handleAddComment: (newComment: CommentsType) => void,
  handleDeleteComment: (id: string) => void,
  handleUpdateComment: (updatedComment: CommentsType) => void
}
const ModalCardInfo: React.FC<Props> = ({
  isOpen,
  close,
  card,
  handleUpdateCard,
  comments,
  handleAddComment,
  handleDeleteComment,
  handleUpdateComment,
  columnTitle,
  userName }) => {

  const [isRedacted, setIsRedacted] = useState<boolean>(false)
  const [updatedTitle, setUpdatedTitle] = useState<string>(card.title);
  const [updatedDescription, setUpdatedDescription] = useState<string>(card.description);
  const [newMessageText, setNewMessageText] = useState<string>('')

  const addComment = () => {
    const newComment = { id: `${new Date().getTime()}`, cardId: card.id, text: newMessageText, author: "" }
    handleAddComment(newComment);
    setNewMessageText('');
  }

  const saveChanges = () => {
    if (!!updatedTitle) {
      setIsRedacted(false);
      handleUpdateCard({ id: card.id, columnId: card.columnId, title: updatedTitle, description: updatedDescription });
    }
  }

  const updateAction = () => {
    isRedacted ? saveChanges() : setIsRedacted(true)
  }
  const information = <CardInfoWrapper>
    <CardTitle>Card Name: {card.title}</CardTitle>
    <CardDescr>Card description: {card.description}</CardDescr>
  </CardInfoWrapper>

  const redactFields = <CardRedactWrapper>
    <CardInputWrapper>
      <Input
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.currentTarget.value)} />
    </CardInputWrapper>
    <CardInputWrapper>
      <Input
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.currentTarget.value)} />
    </CardInputWrapper>
  </CardRedactWrapper>

  return (
    <Modal
      isOpen={isOpen}
      close={close}>
      {isRedacted ? redactFields : information}
      <Button
        onClick={updateAction}
        text={isRedacted ? "💾" : "✎"} />
      <CardModalDescr>Column: {columnTitle}, Author: {userName}</CardModalDescr>
      <CommentsWrapper>
        {comments.map((i: CommentsType) => {
          return <CommentItem
            comment={i}
            key={i.id}
            handleDeleteComment={handleDeleteComment}
            handleUpdateComment={handleUpdateComment} />
        })}
      </CommentsWrapper>
      <SendCommentWrapper>
        <CommentTextarea
          autoFocus
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.currentTarget.value)}></CommentTextarea>
        <Button
          style="padding: 10px 5px; margin-left: 5px;"
          onClick={addComment}
          text="save comment" />
      </SendCommentWrapper>
    </Modal>
  )
}

export default ModalCardInfo;