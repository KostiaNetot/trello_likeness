import { CHECK_CARD } from "./actions";

const editedCardReducer = (state = null, action) => {
  switch (action.type) {
    case CHECK_CARD:
      return action.payload;

    default:
      return state;
  }
};

export default editedCardReducer;
