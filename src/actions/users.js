import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERROR = 'USERS_ERROR';

export const usersRequest = () => {
  return {
    type: 'USERS_REQUEST'
  };
};

export const usersSuccess = user => {
  return {
    type: 'USERS_SUCCESS',
    user
  };
};

export const usersError = error => {
  return {
    type: 'USERS_ERROR',
    error
  };
};


export const registerUser = user => (dispatch, getState) => {
  dispatch(usersRequest());
  console.log(`this is user state: ${JSON.stringify(getState())}`)
  return fetch(`${API_BASE_URL}/users/add`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(user => dispatch(usersSuccess(user)))
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};