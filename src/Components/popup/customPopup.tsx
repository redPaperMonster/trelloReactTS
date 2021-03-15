import React, { MouseEventHandler } from 'react'
import './customPopup.css'

interface Props {
    isOpen: boolean,
    hideCloseButton?: boolean,
    close: MouseEventHandler<HTMLButtonElement>
  }

const CustomPopup: React.FC<Props> = ({isOpen, children, hideCloseButton, close}) => {

    return (
        <div className={isOpen ? "modal active" : "modal"}>
            <div className={isOpen ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
           {children}
           {!hideCloseButton && <button className="modal__close-button" onClick={close}>close</button>}
            </div>
        </div>
    )
}

export default CustomPopup;