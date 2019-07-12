export const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
export const MINUS_TOTAL = 'MINUS_TOTAL';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const BUY_ITEM = 'BUY_ITEM';

let todoId = 0;

export const addToTotal = amount => {
  return {
    type: ADD_TO_TOTAL,
    amount
  }
};

export const minusTotal = amount => {
  return {
    type: MINUS_TOTAL,
    amount
  }
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    id: todoId++,
    item,
    purchased: false
  }
};

export const editItem = (id, formValues) => {
  return {
    type: EDIT_ITEM,
    id,
    formValues
  }
}

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  }
};

export const buyItem = id => {
  return {
    type: BUY_ITEM,
    id
  }
}