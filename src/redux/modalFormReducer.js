import { SHOW_MODAL_FORM, CALLED_FROM } from "./actions";

const initialState = {
  showing: false,
  calledFrom: ''
};

const modalFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_FORM:
      return {
        ...state,
        showing: action.payload
      };

    case CALLED_FROM:
      return {
        ...state,
        calledFrom: action.payload
      };

    default:
      return state;
  }
};


export default modalFormReducer;
