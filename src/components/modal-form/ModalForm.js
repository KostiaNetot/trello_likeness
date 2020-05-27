import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showModalForm, calledFrom, checkCard } from "../../redux/actions";

import './ModalForm.css';

const ModalForm = () => {
  const [ formState, setFormState ] = useState({
    id: '',
    title: '',
    text: '',
    status: '',
    label: '',
    labelColor: ''
  });

  const dispatch = useDispatch();
  const { columns, editedCard } = useSelector(state => state);
  const formContext = useSelector(state => state.modalForm.calledFrom);
  const calledFromCard = (() => formContext === 'card')();

  useEffect(() => {
    // if (editedCard) {
    //   console.log(formState);
    //   setFormState({ ...editedCard });
    //   console.log(formState);
    // }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (e.target.className === 'modal-form-wrapper') {
      dispatch(calledFrom(''));
      dispatch(checkCard(null));
      dispatch(showModalForm(false));
    }
    if (calledFromCard) {
      console.log('calledFromCard');
    }
  };

  const handleChange = (e) => {
    setFormState({ [e.target.name]: e.target.value });
    console.log(formState);
  };

  const closeModal = (e) => {
    e.preventDefault();
    if (e.target.className === 'modal-form-wrapper' || e.target.className === 'close-button') {
      dispatch(showModalForm(false));
      dispatch(checkCard(null));
    }
  };

  return (
    <div onClick={closeModal} className='modal-form-wrapper'>
      <div className="modal-form-inner">
        <h4>{ editedCard ? 'Edit card' : 'Create new card' }</h4>
        <div onClick={closeModal} className="close-button"></div>
        <form onSubmit={handleFormSubmit}>
          <input
            name='title'
            type="text"
            value={ editedCard ? editedCard.title : '' }
            placeholder={ editedCard ? '' : 'Enter name of task' }
            onChange={ handleChange }
          />
          <select onChange={ handleChange } name="label">
            <option value="">label (optionaly)</option>
            <option value="design green">UI design</option>
            <option value="marketing purple">Marketing</option>
            <option value="research red">Research</option>
          </select>
          <textarea
            onChange={ handleChange }
            value={ editedCard ? editedCard.text : '' }
            placeholder={ editedCard ? '' : 'Description of task...' }
            name="text" rows='5' cols='30'></textarea>
          <select onChange={ handleChange } name="status" id="status">
            {
              columns.map(option => {
                return (
                  <option
                    key={option.id}
                    value={option.value}
                  >
                      { option.title }
                  </option>
                )
              })
            }
          </select>
          <button>{ editedCard ? 'Save changes' : 'Create' }</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
