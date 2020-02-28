import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ITEM_REQUEST = 'ITEM_REQUEST';
export const ITEM_SUCCESS = 'ITEM_SUCCESS';
export const ITEM_ERROR = 'ITEM_ERROR';
export const ITEMS_LOADING = 'ITEMS_LOADING';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
export const MINUS_TOTAL = 'MINUS_TOTAL';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const BUY_ITEM = 'BUY_ITEM';

//let todoId = 0;

export const itemRequest = () => {
  return {
    type: ITEM_REQUEST
  };
};

export const itemSuccess = item => {
  return {
    type: ITEM_SUCCESS,
    item
  };
};

export const itemError = error => {
  return {
    type: ITEM_ERROR,
    error
  };
};

export const itemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const udpateSuccess = () => {
  return{
    type: UPDATE_SUCCESS
  }
}

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

// export const addItem = item => {
//   return {
//     type: ADD_ITEM,
//     id: todoId++,
//     item,
//     purchased: false,
//     isEditing: false
//   }
// };

export const getItems = () => (dispatch, getState) => {
  dispatch(itemsLoading());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/items`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(items => dispatch(itemSuccess(items)))
  .catch(err => dispatch(itemError(err)))
}

export const addItem = item => (dispatch, getState) => {

  dispatch(itemRequest());
  console.log(`add item action: ${JSON.stringify(item)}`)
  console.log(`this is state: ${JSON.stringify(getState())}`)
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/items/add`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(item)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(item => dispatch(itemSuccess(item)))
  .catch(err => dispatch(itemError(err)))
};

export const getItem = id => (dispatch, getState) => {
  dispatch(itemRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(itemSuccess(item)))
    .catch(err => dispatch(itemError(err)))
}

export const editItem = id => {
  return {
    type: EDIT_ITEM,
    id
  }
};

export const updateItem = (id, values) => (dispatch, getState) => {
  dispatch(itemRequest())
  const authToken = getState().auth.authToken;
  const { name, price } = values;
  let data = {id, name, price}
  
  return fetch(`${API_BASE_URL}/items/update/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(data)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(udpateSuccess()))
    .catch(err => dispatch(itemError(err)))
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
};