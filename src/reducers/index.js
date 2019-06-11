import { combineReducers } from 'redux';
import totalReducer from './totalReducer';
import listItemsReducer from './listItemsReducer';

export default combineReducers({
  total: totalReducer,
  items: listItemsReducer
});