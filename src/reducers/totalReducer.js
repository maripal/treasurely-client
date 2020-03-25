import { 
  UPDATE_TOTAL_SUCCESS, 
  INCREASE_TOTAL, 
  UPDATE_TOTAL_REQUEST, 
  UPDATE_TOTAL_ERROR,
  MINUS_TOTAL 
} from '../actions/index';

const initialState = {
  total: 0,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    // case GET_TOTAL:
    //   return {...state, state: action.amount}
    case UPDATE_TOTAL_REQUEST: 
      console.log(state)
      return {...state, isLoading: !false};
    case UPDATE_TOTAL_SUCCESS:
    case INCREASE_TOTAL:
      console.log(state)
      return {...state, total: action.amount};
    case UPDATE_TOTAL_ERROR: 
      return {...state, isLoading: false, error: action.error}
/*     case MINUS_TOTAL:
      return state - action.amount; */
    default:
      return state;
  }
}