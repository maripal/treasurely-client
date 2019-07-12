import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import totalReducer from './totalReducer';
import listItemsReducer from './listItemsReducer';

export default combineReducers({
  total: totalReducer,
  items: listItemsReducer,
  form: formReducer
});