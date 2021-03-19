import React from 'react'
import { Button } from '..';
import { CloseButton, ModalContent, ModalWindow } from './ModalStyles';

interface Props {
    isOpen: boolean,
    hideCloseButton?: boolean,
    close: () => void
}

const Modal: React.FC<Props> = ({
    isOpen,
    children,
    hideCloseButton,
    close }) => {

    const handleKeyPress = (e: any) => {
        if (!hideCloseButton && e.key === 'Escape') {
            close();
        }
    }
    if (!isOpen) return null;
    return (
        <ModalWindow
            onKeyDown={e => handleKeyPress(e)} >
            <ModalContent
                onClick={e => e.stopPropagation()}>
                {children}
                {!hideCloseButton && <CloseButton>
                    <Button
                        onClick={close}
                        text="❌" /></CloseButton>}
            </ModalContent>
        </ModalWindow>
    )
}

export default Modal;