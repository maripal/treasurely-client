import {
  ADD_ITEM,
  EDIT_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  BUY_ITEM,
} from '../actions';

const initialState = {
  items: [],
}; 

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {...state, items: [...state.items, {id: action.id, item: action.item, purchased: action.purchased, isEditing: action.isEditing}]};
    //GOTTA FINISH THIS FUNCITONALITY TO UPDATE AN ITEM!!!
    case EDIT_ITEM:
      return {...state, items: state.items.map(item => item.id === action.id ? {...item, isEditing: !false} : item)};
    case UPDATE_ITEM: 
      return {...state, items: state.items.map(item => item.id === action.id ? {id: item.id, item: action.item, purchased: false, isEditing: false} : item)}
    case DELETE_ITEM:
      //NOTE: when item is deleted, the item after it takes it's place and key, but the id # stays the same.
      //So item in key 2 has the item w/ an id of 3. Should item w/ id of 3 change it's id to 2??
      return {items: state.items.filter(item => item.id !== action.id)}
    case BUY_ITEM:
      //change/update our purchased property to 'true'
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