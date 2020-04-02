import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const setAuthToken = authToken => {
  return {
    type: SET_AUTH_TOKEN,
    authToken
  };
};

export const clearAuth = () => {
  return {
    type: CLEAR_AUTH
  };
};

export const authRequest = () => {
  return {
    type: AUTH_REQUEST
  };
};

export const authSuccess = currentUser => {
  return {
    type: AUTH_SUCCESS,
    currentUser
  };
};

export const authError = error => {
  return {
    type: AUTH_ERROR,
    error
  };
};

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  const { id, username, firstName } = decodedToken.user
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess({ id, username, firstName }))
  saveAuthToken(authToken);
};

export const login = (username, password) => (dispatch, getState) => {
  
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { code } = err;
      const message = code === 401 ? 'Incorrect username or password' : 'Unable to log in, please try again';
      dispatch(authError(err));
      return Promise.reject(
        new SubmissionError({ _error: message })
      );
    })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    })
};