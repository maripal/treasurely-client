import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import totalReducer from './totalReducer';
import listItemsReducer from './listItemsReducer';
import authReducer from './auth';
import usersReducer from './users';

export default combineReducers({
  total: totalReducer,
  items: listItemsReducer,
  form: formReducer,
  auth: authReducer,
  users: usersReducer
});