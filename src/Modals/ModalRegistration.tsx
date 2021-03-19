
import React, { useState } from 'react'
import { Button, Modal, Input, Tooltip } from '../Components';
import { ModalInputTooltipWrapper, ModalTitle, SomeWrapper } from './ModalsStyles';

interface Props {
    isOpen: boolean,
    close: () => void,
    handleNameEnterSubmit: (name: string) => void
}

const ModalRegistration: React.FC<Props> = ({
    isOpen,
    close,
    handleNameEnterSubmit }) => {

    let userName = "";

    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const handleChange = (text: string) => {
        userName = text;
    }
    const handleSubmit = () => {
        !!userName ? handleNameEnterSubmit(userName) : setShowTooltip(true);
    }

    return (
        <Modal
            isOpen={isOpen}
            close={close} hideCloseButton>
            <ModalTitle>Enter your name</ModalTitle>
            <ModalInputTooltipWrapper>
                <SomeWrapper>
                    <Input
                        focused
                        onChange={e => handleChange(e.currentTarget.value)} />
                </SomeWrapper>
                <SomeWrapper>
                    <Tooltip showTooltip={showTooltip}></Tooltip></SomeWrapper>
            </ModalInputTooltipWrapper>
            <Button
                style="padding: 5px 20px"
                onClick={handleSubmit}
                text="ok" />

        </Modal>
    )
}

export default ModalRegistration;
