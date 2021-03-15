import * as React from 'react';
import CustomPopup from '../popup/customPopup';
import { useState } from 'react'
import './createCardButton.css'
interface Props {

}

const CreateCardButton: React.FC<Props> = () => {
  const [popupActive, setPopupActive] = useState(false)
  return (
    <div>
      <div>
        <button className="createCard__button" onClick={() => setPopupActive(true)}>add card</button>
        <CustomPopup isOpen={popupActive} close={() => setPopupActive(false)}>
          <form className="createCard__form" action="">
            <input className="createCard__input" type="text" placeholder="enter card name" />
            <textarea className="createCard__textarea" placeholder="enter card description" ></textarea>
            <button type="button" onClick={() => setPopupActive(false)}>submit</button>
          </form>
        </CustomPopup>
      </div>
    </div>
  )
}

export default CreateCardButton;