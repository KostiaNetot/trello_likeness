import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';

import BoardColumn from "./components/board-column/BoardColumn";
import ModalForm from "./components/modal-form/ModalForm";

function App() {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns);
  const modalForm = useSelector(state => state.modalForm.showing);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          { columns.map(column => (
            <BoardColumn
              title={column.title}
              cards={column.cards}
              key={column.id}
              bgColor={column.bgColor}
              icon={column.icon}
            />
          )) }
        </div>
        { modalForm ? <ModalForm/> : null }
      </div>
    </div>
  );
}

export default App;
