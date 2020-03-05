import {
  ITEM_REQUEST,
  ITEM_SUCCESS,
  ITEM_ERROR,
  ITEMS_LOADING,
  UPDATE_SUCCESS,
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
      return {...state, isLoading: true};
    case ITEMS_LOADING:
      return {...state, isLoading: true, error: null};
    case GET_ITEMS:
      return {...state, items: [action.items]}
    case ITEM_SUCCESS:
    case ADD_ITEM:
      return {...state, items: [...state.items, action.item], isLoading: false};
    case EDIT_ITEM:
      // return {...state, items: state.items.map(item => item.id === action.id ? {...item, isEditing: !false} : item)};
      return {...state, isEditing: !false};
    case UPDATE_SUCCESS:
    case UPDATE_ITEM: 
      //return {...state, items: state.items.map(item => item.id === action.id ? {...item, item: action.item, isEditing: false} : item)}
      return {...state, items: state.items.map(item => item.id === action.item.id ? {...item, item: action.item} : item)}
    case DELETE_ITEM:
      return {items: state.items.filter(item => item.id !== action.id)}
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
    case ITEM_ERROR:
      return {...state, error: action.error}
    default:
      return state;
  }
};