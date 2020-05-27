import React from 'react';
import { useDispatch } from "react-redux";
import { showModalForm, calledFrom, checkCard } from "../../redux/actions";

import './BoardColumn.css';
import BoardCard from "../board-card/BoardCard";
import AddTaskButton from "../add-task-button/AddTaskButton";

const BoardColumn = ({ title, cards, bgColor, icon }) => {
  const dispatch = useDispatch();

  const showModal = (card) => {
    if (card.title) {
      dispatch(calledFrom('card'));
      dispatch(checkCard(card));
    }
    dispatch(showModalForm(true));
  };

  return (
    <div className='column-container' style={{ backgroundColor: bgColor}}>
      <div className="header-icon icon" style={{ backgroundImage: `url(./img/${icon})` }}></div>
      <h3>{ title } <span>{ cards.length }</span></h3>
      <AddTaskButton showModal={showModal} />
      { cards.map(card => <BoardCard key={card.id} card={card} showModal={showModal} />) }
    </div>
  );
};

export default BoardColumn;
