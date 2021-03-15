import './customColumn.css'
import CustomCards from '../cards/customCards';
import React, { MouseEventHandler, useState } from 'react'
import { CardType } from './../../App'
import CustomPopup from '../popup/customPopup';
interface Props {
  title: string,
  description: string,
  cards: any,
  id: string,
  handleDeleteColumn: (id: string) => void,
  handleUpdate: (id: string, newTitle: string, newDescr: string) => void,
  handleDeleteCard: (id: string) => void,
  handleAddCard: (newTitle: string, newDescr: string, columnId: string) => void
}

const CustomColumn: React.FC<Props> = ({ title, description, id, cards, handleDeleteColumn, handleUpdate, handleDeleteCard,
  handleAddCard }) => {
  const [redactedMode, setRedactedMode] = useState<boolean>(false);
  const [popupActive, setPopupActive] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState<string>(title);
  const [updateDescr, setUpdatedDescr] = useState<string>(description);
  const [newCardTitle, setNewCardTitle] = useState<string>('');
  const [newCardDescr, setNewCardDescr] = useState<string>('');

  const submitAddCard = () => {
    if (!!newCardTitle) {
      handleAddCard(newCardTitle, newCardDescr, id);
      setPopupActive(false);
    }

  }
  const columnDataShow = <div>
    <h1>{title}</h1>
    <span>{description}</span>
    <button onClick={() => setRedactedMode(true)}>update</button>
  </div>

  const columnDataRedact = <div>
    <input value={updatedTitle} onChange={(e) => setUpdatedTitle(e.currentTarget.value)} type="text" />
    <input value={updateDescr} onChange={(e) => setUpdatedDescr(e.currentTarget.value)} type="text" />
    <button onClick={() => { setRedactedMode(false); handleUpdate(id, updatedTitle, updateDescr) }}>save</button>
  </div>

  return (
    <div className="column">
      {redactedMode ? columnDataRedact : columnDataShow}
      <button onClick={() => handleDeleteColumn(id)}>delete</button>

      {
        cards.map((card: CardType) => {
          return <CustomCards 
          key={card.id} 
          card={card} 
          handleDeleteCard={handleDeleteCard} />
        })
      }
      <button className="column__add-button" onClick={() => setPopupActive(true)}>+ add</button>
      <CustomPopup
        isOpen={popupActive}
        close={() => setPopupActive(false)}>
        <form action="">
          <h2>Enter card title</h2>
          <input
            value={newCardTitle}
            onChange={e => setNewCardTitle(e.currentTarget.value)} type="text" />
          <h2>Enter card description</h2>
          <input
            value={newCardDescr}
            onChange={e => setNewCardDescr(e.currentTarget.value)} type="text" />
          <button type="button"
            onClick={() => submitAddCard()}>ok</button>
        </form>
      </CustomPopup>
    </div >
  )
}

export default CustomColumn;