import * as React from 'react';
import CustomPopup from '../popup/customPopup';
import './customCards.css'
import { useState } from 'react'
import {CardType} from './../../App'
interface Props {
  card: CardType,
  handleDeleteCard: (id:string) => void
}

const CustomCards: React.FC<Props> = ({ card, handleDeleteCard}) => {
  const [popupActive, setPopupActive] = useState(false)
  //const [newDescr, setNewDescr] = useState<string>(description);

  return (
    <div onClick={() => setPopupActive(true)} className="column_card">
      <div className="card__wrapper">
      <span>{card.title}</span>
      <button className="card__delete-button" onClick={e => {e.stopPropagation(); handleDeleteCard(card.id)}}>X</button>
      </div>
      <CustomPopup isOpen={popupActive} close={() => setPopupActive(false)}>
        <div>
        <h3>{card.title}</h3>
        <span>{card.descr}</span>
        <button>redact</button>
        </div>
      </CustomPopup>
    </div>
  )
}

export default CustomCards;