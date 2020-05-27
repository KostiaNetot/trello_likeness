import React from 'react';
import { useDispatch } from "react-redux";

import './AddTaskButton.css';

const AddTaskButton = ({ showModal }) => {
  const dispatch = useDispatch();

  return (
    <div className='add-task-button'>

      <span onClick={showModal}></span>

    </div>
  );
};

export default AddTaskButton;
