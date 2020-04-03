import {
  GET_TOTAL_REQUEST,
  GET_TOTAL_SUCCESS,
  GET_TOTAL,
  GET_TOTAL_ERROR, 
  INCREASE_TOTAL_REQUEST, 
  INCREASE_TOTAL_SUCCESS, 
  INCREASE_TOTAL, 
  INCREASE_TOTAL_ERROR,
  DECREASE_TOTAL_REQUEST,
  DECREASE_TOTAL_SUCCESS,
  DECREASE_TOTAL, 
  DECREASE_TOTAL_ERROR
} from '../actions/index';

const initialState = {
  total: 0,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_TOTAL_REQUEST:
      return {...state, isLoading: !false};
    case GET_TOTAL_SUCCESS:
    case GET_TOTAL:
      return {...state, total: action.amount, isLoading: false};
    case GET_TOTAL_ERROR:
      return {...state, isLoading: false, error: action.error};
    case INCREASE_TOTAL_REQUEST: 
      console.log(state)
      return {...state, isLoading: !false};
    case INCREASE_TOTAL_SUCCESS:
    case INCREASE_TOTAL:
      return {...state, total: action.amount, isLoading: false};
    case INCREASE_TOTAL_ERROR: 
      return {...state, isLoading: false, error: action.error};
    case DECREASE_TOTAL_REQUEST:
      return {...state, isLoading: !false};
    case DECREASE_TOTAL_SUCCESS:
    case DECREASE_TOTAL:
      return {...state, total: action.amount, isLoading: false};
    case DECREASE_TOTAL_ERROR:
      return {...state, isLoading: false, error: action.error};
    default:
      return state;
  }
}