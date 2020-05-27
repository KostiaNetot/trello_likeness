import { combineReducers } from "redux";
import columnReducer from "./columnReducer";
import modalFormReducer from "./modalFormReducer";
import editedCardReducer from "./editedCardReducer";


const rootReducer = combineReducers({
  columns: columnReducer,
  modalForm: modalFormReducer,
  editedCard: editedCardReducer
});

export default rootReducer;
