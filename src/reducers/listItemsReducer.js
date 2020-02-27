import {
  ITEM_REQUEST,
  ITEM_SUCCESS,
  ITEM_ERROR,
  ITEMS_LOADING,
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
      return {...state, items: [...state.items, action.item]};
    case EDIT_ITEM:
      return {...state, items: state.items.map(item => item.id === action.id ? {...item, isEditing: !false} : item)};
    case UPDATE_ITEM: 
      return {...state, items: state.items.map(item => item.id === action.id ? {...item, item: action.item, isEditing: false} : item)}
    case DELETE_ITEM:
      //NOTE: when item is deleted, the item after it takes it's place and key, but the id # stays the same.
      //So item in key 2 has the item w/ an id of 3. Should item w/ id of 3 change it's id to 2??
      return {items: state.items.filter(item => item.id !== action.id)}
    case BUY_ITEM:
      return {items: state.items.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            //purchased: !false
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