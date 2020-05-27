import React from 'react';

import settings from './edit.png';
import './BoardCard.css';

const BoardCard = ({ card, showModal }) => {
  const { title, text, label, labelColor, status } = card;

  return (
    <div className='board-card'>
      <h4>{ title }</h4>
      <img onClick={() => showModal(card)} className='icon settings-icon' src={settings} alt="settings"/>
      { label ? <p className="label" style={{ backgroundColor: labelColor }}>{label}</p> : null }
      <p className='board-card__text'>{ text }</p>
      <p className='status'><small>{ status }</small></p>
    </div>
  );
};

export default BoardCard;
