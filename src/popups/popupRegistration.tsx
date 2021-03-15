
import React, { useState, SetStateAction, Dispatch } from 'react'
import CustomPopup from '../Components/popup/customPopup'

interface Props {
    setUser: Dispatch<SetStateAction<string>>
  }

const PopupRegistration: React.FC<Props> = ({setUser}) => {
    const [popupActive, setPopupActive] = useState(true)
    return (    
        <CustomPopup isOpen={popupActive} close={() => setPopupActive(false)} hideCloseButton> 
        <form action="">
            <h2>Enter your name</h2>
            <input onChange={ e =>  setUser(e.currentTarget.value) } type="text"/>
            <button type="button" onClick={(e) =>  setPopupActive(false)}>ok</button>
            </form>
        </CustomPopup>
    )
}

export default PopupRegistration;