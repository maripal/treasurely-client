export const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
export const MINUS_TOTAL = 'MINUS_TOTAL';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addToTotal = amount => {
  return {
    type: ADD_TO_TOTAL,
    payload: amount
  }
};

export const minusTotal = amount => {
  return {
    type: MINUS_TOTAL,
    payload: amount
  }
};

export const addItem = name => {
  return {
    type: ADD_ITEM,
    payload: name
  }
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
};