import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from './reducers/authReducer';
import totalReducer from './reducers/totalReducer';
import itemsListReducer from './reducers/itemsListReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auth: authReducer,
    form: formReducer,
    total: totalReducer,
    itemsList: itemsListReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;