import React from 'react';
import './App.css';
import { useState } from 'react'
import CustomColumn from './Components/columns/customColumn';
import PopupCreateColumn from './popups/popupCreateColumn';
//как лучше организовать стейты с новыми именами
//styled-comps
// пропсы в столбик
export type ColumnType = {
  id: string,
  title: string,
  descr: string}


export type CardType = {
  id: string,
  columnId: string,
  title: string,
  descr: string
}

export type CommentsType = {
  id: string,
  cardId: string,
  text: string
}

export type StateType = {
  columns: Array<ColumnType>
  cards: Array<CardType>
  comments: Array<CommentsType>
}

function App() {
  const initialState:StateType = {
    columns:  [
      //ID ID ID ID not columnID `${new Date().getTime()}-inprogress` `${new Date().getTime()}-TODO`
      { id: "0", title: "TODO", descr: "some TODO column" },
      { id: "1", title: "in progress", descr: "progress column" }],

    cards: [
      { id: "0", columnId: "0", title: "todo card", descr: "gogogogo" },
      { id: "1", columnId: "0", title: "todo card2", descr: "gogogogo" },
      { id: "2", columnId: "1", title: "some card", descr: "gogogogo" } ],

    comments: [
      { id: "0", cardId: "0", text: "null" }
    ]
  }
  const [userName, setUserName] = useState<string>('');
  const [globalState, setGlobalState] = useState<StateType>(initialState);
  const [newColumnName, setNewColumnName] = useState<string>('');
  const [newColumnDescription, setNewColumnDescription] = useState<string>('');

  const handleAddColumn = (newName: string, newDescription: string) => {
    let newColumn: ColumnType = { id: '3', title: newName, descr: newDescription }
    setGlobalState({ ...globalState, columns: [...globalState.columns, newColumn] })
    setNewColumnName('');
    setNewColumnDescription('');
  }

  const handleDeleteColumn = (id: string) => {
    const newColumns = globalState.columns.filter((item: ColumnType) => item.id !== id);
    setGlobalState({ ...globalState, columns: newColumns })
  }

  const handleUpdateColumn = (id: string, newTitle: string, newDescr: string) => {
    let newColumns = globalState.columns.map((item: ColumnType) => {
      if (id === item.id) {
        return item = { id: item.id, title: newTitle, descr: newDescr }
      }
      return item
    })
    setGlobalState({ ...globalState, columns: newColumns })
  }

  const handleAddCard = (newTitle: string, newDescr: string, columnId: string) => {
    let newCards: CardType = {id: '', columnId: columnId, title: newTitle, descr: newDescr }
    setGlobalState({...globalState, cards: [...globalState.cards, newCards]})
  }

  const handleDeleteCard = (id: string) => {
    let newCards = globalState.cards.filter((item: CardType) => item.id!== id)
    setGlobalState({ ...globalState, cards: newCards})
  }

  const handleUpdateCard = () => {

  }

  return (
    <div className="board_grid">
      {/* <PopupRegistration setUser={setUserName} /> */}
      {globalState.columns.map((item: ColumnType) => {
        const columnCards =
          globalState.cards.filter((i: CardType) => i.columnId === item.id)
          return (<CustomColumn
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.descr}
          cards={columnCards}
          handleDeleteColumn={handleDeleteColumn}
          handleUpdate={handleUpdateColumn}
          handleDeleteCard={handleDeleteCard}
          handleAddCard={handleAddCard}/>)
      })}
      <PopupCreateColumn
        newBoardName={newColumnName}
        newBoardDescription={newColumnDescription}
        setNewName={setNewColumnName}
        setNewDescription={setNewColumnDescription}
        addColumn={handleAddColumn} />
    </div>
  );
}

export default App;
