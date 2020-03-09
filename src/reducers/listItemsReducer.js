import {
  ITEM_REQUEST,
  ITEM_SUCCESS,
  ITEM_ERROR,
  ITEMS_LOADING,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  UPDATE_SUCCESS,
  UPDATE_ITEM_REQUEST,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  GET_ITEMS,
  ADD_ITEM,
  EDIT_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  BUY_ITEM,
} from '../actions';

const initialState = {
  items: [],
  isLoading: false,
  isEditing: false,
  error: null
}; 

export default (state = initialState, action) => {
  switch(action.type) {
    case ITEM_REQUEST:
      return {...state, isLoading: !false};
    case ITEMS_LOADING:
      return {...state, isLoading: !false, error: null};
    case ITEM_ERROR:
      return {...state, error: action.error};
    case GET_ITEMS_REQUEST:
      return {...state, items: [], isLoading: !false};
    case GET_ITEMS_SUCCESS:
    case GET_ITEMS:
      return {...state, items: action.items};
    case GET_ITEMS_ERROR:
      return {...state, error: action.error}
    case ITEM_SUCCESS:
    case ADD_ITEM:
      return {...state, items: [...state.items, action.item], isLoading: false};
    case UPDATE_ITEM_REQUEST:
    case EDIT_ITEM:
      // return {...state, items: state.items.map(item => item.id === action.id ? {...item, isEditing: !false} : item)};
      return {...state, isEditing: !false};
    case UPDATE_SUCCESS:
    case UPDATE_ITEM: 
      return {...state, items: state.items.map(item => item.id === action.item.id ? action.item : item), isEditing: false};
    case DELETE_ITEM_REQUEST:
      return {...state, isLoading: !false};
    case DELETE_ITEM_SUCCESS:
    case DELETE_ITEM:
      //return {...state, items: state.items.filter(item => item.id !== action.item.id), isLoading: false}
      return {items: state.items.filter(item => item.id !== action.id), isLoading: false};
    case DELETE_ITEM_ERROR:
      return {...state, error: action.error}
    case BUY_ITEM:
      return {items: state.items.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            purchased: !false
          }
        } else {
          return item;
        };
      })};
    default:
      return state;
  }
};