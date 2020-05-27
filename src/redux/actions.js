export const SHOW_MODAL_FORM = 'SHOW_MODAL_FORM';
export const CALLED_FROM = 'CALLED_FROM';
export const CHECK_CARD = 'CHECK_CARD';

export const showModalForm = (showForm) => {
  return {
    type: SHOW_MODAL_FORM,
    payload: showForm
  }
};

export const calledFrom = (context) => {
  return {
    type: CALLED_FROM,
    payload: context
  }
};

export const checkCard = (card) => {
  return {
    type: CHECK_CARD,
    payload: card
  }
};

