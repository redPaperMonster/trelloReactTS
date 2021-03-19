
import React from 'react'
import { ModalTitle } from './ModalsStyles';
import { Modal, Button, Input } from '../Components';
import { CreateCardItemWrapper, CreateCardWrapper } from './ModalsStyles';

interface Props {
  isOpen: boolean,
  close: () => void,
  handleSubmitCreate: (title: string, description: string) => void
}

const ModalCreateCard: React.FC<Props> = ({
  isOpen,
  close, 
  handleSubmitCreate }) => {


  let localCardTitle: string, localCardDescription: string;

  const createAction = () => {
    handleSubmitCreate(localCardTitle, localCardDescription)
  }
  return (
    <Modal
      isOpen={isOpen}
      close={close}>
        <CreateCardWrapper>
          <ModalTitle>Enter card title</ModalTitle>
          <CreateCardItemWrapper>
            <Input focused
              onChange={e => { localCardTitle = e.currentTarget.value }} />
          </CreateCardItemWrapper>
          <ModalTitle>Enter card description</ModalTitle>
          <CreateCardItemWrapper>
            <Input
              onChange={e => { localCardDescription = e.currentTarget.value }} />
          </CreateCardItemWrapper>
          <CreateCardItemWrapper>
            <Button
              style="padding: 5px 20px"
              onClick={createAction}
              text="ok" />
          </CreateCardItemWrapper>
        </CreateCardWrapper>
    </Modal>
  )
}

export default ModalCreateCard;