import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ITEM_REQUEST = 'ITEM_REQUEST';
export const ITEM_SUCCESS = 'ITEM_SUCCESS';
export const ITEM_ERROR = 'ITEM_ERROR';
export const ITEMS_LOADING = 'ITEMS_LOADING';
export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
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

export const editItem = id => {
  return {
    type: EDIT_ITEM,
    id
  }
};

export const udpateSuccess = item => {
  return{
    type: UPDATE_SUCCESS,
    item
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

export const updateItemAction = () => {
  return {
    type: UPDATE_ITEM_REQUEST,
  }
}

export const updateItem = (id, values) => (dispatch, getState) => {
  const { name, price } = values;
  dispatch(updateItemAction())
  const authToken = getState().auth.authToken;
  console.log(`update data: ${JSON.stringify(values)}`)
  return fetch(`${API_BASE_URL}/items/update/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({id, name, price})
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(udpateSuccess(item)))
    .catch(err => dispatch(itemError(err)))
}

export const deleteItem = id =>  {
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