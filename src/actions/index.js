import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ITEM_REQUEST = 'ITEM_REQUEST';
export const ITEM_SUCCESS = 'ITEM_SUCCESS';
export const ITEM_ERROR = 'ITEM_ERROR';
export const ITEMS_LOADING = 'ITEMS_LOADING';
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';
export const GET_TOTAL_REQUEST = 'GET_TOTAL_REQUEST';
export const GET_TOTAL_SUCCESS = 'GET_TOTAL_SUCCESS';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_TOTAL_ERROR = 'GET_TOTAL_ERROR';
export const INCREASE_TOTAL_REQUEST = 'INCREASE_TOTAL_REQUEST';
export const INCREASE_TOTAL_SUCCESS = 'INCREASE_TOTAL_SUCCESS';
export const INCREASE_TOTAL_ERROR = 'INCREASE_TOTAL_ERROR';
export const INCREASE_TOTAL = 'INCREASE_TOTAL';
export const DECREASE_TOTAL_REQUEST = 'DECREASE_TOTAL_REQUEST';
export const DECREASE_TOTAL_SUCCESS = 'DECREASE_TOTAL_SUCCESS';
export const DECREASE_TOTAL_ERROR = 'DECREASE_TOTAL_ERROR';
export const DECREASE_TOTAL = 'DECREASE_TOTAL';
export const BUY_ITEM_REQUEST = 'BUY_ITEM_REQUEST';
export const BUY_ITEM_SUCCESS = 'BUY_ITEM_SUCCESS';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const BUY_ITEM = 'BUY_ITEM';



export const getTotalAction = () => {
  return {
    type: GET_TOTAL_REQUEST
  };
};

export const getTotalSuccess = amount => {
  return {
    type: GET_TOTAL_SUCCESS,
    amount
  };
};

export const getTotalError = error => {
  return {
    type: GET_TOTAL_ERROR,
    error
  };
};

export const getTotal = () => (dispatch, getState) => {
  dispatch(getTotalAction());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/users/total`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ totalSavings }) => dispatch(getTotalSuccess(totalSavings)))
    .catch(err => dispatch(getTotalError(err)))
};

export const increaseTotalAction = () => {
  return {
    type: INCREASE_TOTAL_REQUEST
  }
}

export const increaseTotalSuccess = amount => {
  return {
    type: INCREASE_TOTAL_SUCCESS,
    amount
  };
};

export const increaseTotalError = error => {
  return {
    type: INCREASE_TOTAL_ERROR,
    error
  };
};

export const increaseTotal = amount => (dispatch, getState) => {
  dispatch(increaseTotalAction());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/users/total`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(amount)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ totalSavings }) => dispatch(increaseTotalSuccess(totalSavings)))
    .catch(err => dispatch(increaseTotalError(err)))
};

export const decreaseTotalAction = () => {
  return {
    type: DECREASE_TOTAL_REQUEST
  };
};

export const decreaseTotalSuccess = amount => {
  return {
    type: DECREASE_TOTAL_SUCCESS,
    amount
  };
};

export const decreaseTotalError = error => {
  return {
    type: DECREASE_TOTAL_ERROR,
    error
  };
};

export const decreaseTotal = amount => (dispatch, getState) => {
  dispatch(decreaseTotalAction());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/users/total`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(amount)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ totalSavings }) => dispatch(decreaseTotalSuccess(totalSavings)))
    .catch(err => dispatch(decreaseTotalError(err)))
};

export const getItemsAction = () => {
  return {
    type: GET_ITEMS_REQUEST
  };
};

export const getItemsSuccess = items => {
  return {
    type: GET_ITEMS_SUCCESS,
    items
  };
};

export const getItemsError = error => {
  return {
    type: GET_ITEMS_ERROR,
    error
  };
};

export const getItems = () => (dispatch, getState) => {
  dispatch(getItemsAction());
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
  .then(items => dispatch(getItemsSuccess(items)))
  .catch(err => dispatch(getItemsError(err)))
}

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
};

export const updateItemAction = () => {
  return {
    type: UPDATE_ITEM_REQUEST,
  };
};

export const editItem = id => {
  return {
    type: EDIT_ITEM,
    id
  }
};

export const updateSuccess = item => {
  return{
    type: UPDATE_SUCCESS,
    item
  }
};

export const updateItem = (id, values) => (dispatch, getState) => {
  const { name, price } = values;
  dispatch(updateItemAction());
  const authToken = getState().auth.authToken;

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
    .then(item => dispatch(updateSuccess(item)))
    .catch(err => dispatch(itemError(err)))
};

export const buyItemAction = () => {
  return {
    type: BUY_ITEM_REQUEST
  };
};

export const buyItemSuccess = item => {
  return {
    type: BUY_ITEM_SUCCESS,
    item
  }
};

export const buyItem = (id, purchased) => (dispatch, getState) => {

  dispatch(buyItemAction());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/items/update/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({id, purchased})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(item => dispatch(buyItemSuccess(item)))
  .catch(err => dispatch(itemError(err)))
};

export const deleteItemAction = () => {
  return {
    type: DELETE_ITEM_REQUEST
  };
};

export const deleteItemSuccess = id => {
  return {
    type: DELETE_ITEM_SUCCESS,
    id
  };
};

export const deleteItemError = error => {
  return {
    type: DELETE_ITEM_ERROR,
    error
  }
}

export const deleteItem = id => (dispatch, getState) => {
  dispatch(deleteItemAction())
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => dispatch(deleteItemSuccess(id)))
    .catch(err => dispatch(deleteItemError(err)))
};

