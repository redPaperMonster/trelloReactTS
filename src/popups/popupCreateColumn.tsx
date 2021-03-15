
import React, { useState, SetStateAction, Dispatch } from 'react'
import CustomPopup from '../Components/popup/customPopup'

interface Props {
    setNewName: Dispatch<SetStateAction<string>>,
    setNewDescription: Dispatch<SetStateAction<string>>,
    addColumn: Function, 
    newBoardName: string,
    newBoardDescription: string
}

const PopupCreateColumn: React.FC<Props> = ({setNewName, setNewDescription, addColumn, newBoardName,newBoardDescription}) => {
    const [popupActive, setPopupActive] = useState(false)
    const submitCreation = (name: string, descr: string) =>
    {
        if (!!newBoardName)
        {
            addColumn(name,descr);
            setPopupActive(false)
        }

    }
    return (
        <div>
            <button onClick={() => setPopupActive(true)}>create board</button>
            <CustomPopup isOpen={popupActive} close={() => setPopupActive(false)}> 
                <form action="">
                    <h2>Enter board name</h2>
                    <input value={newBoardName}  onChange={e => setNewName(e.currentTarget.value)} type="text" />
                    <h2>Enter board description</h2>
                    <input value={newBoardDescription} onChange={e => setNewDescription(e.currentTarget.value)} type="text" />
                    <button type="button" onClick={() => submitCreation(newBoardName,newBoardDescription)}>ok</button>
                </form>
            </CustomPopup>
        </div>
    )
}

export default PopupCreateColumn;