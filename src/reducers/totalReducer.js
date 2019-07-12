import { ADD_TO_TOTAL, MINUS_TOTAL } from '../actions';

// const initialState = {
//   totalSavings: 0
// }

export default (state = 100, action) => {
  switch(action.type) {
    case ADD_TO_TOTAL:
      return state + action.amount;
    case MINUS_TOTAL:
      return state - action.amount;
    default:
      return state;
  }
}