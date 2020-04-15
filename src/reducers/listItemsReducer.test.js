import listItemsReducer from './listItemsReducer';
import {
  getItemsSuccess,
  itemSuccess,
  updateSuccess,
  deleteItemSuccess,
  buyItem
} from '../actions';


describe('listItemsReducer', () => {

  // Setting up dummy state
  const item1 = { id: 0, name: 'bike', price: 300, purchased: false };
  const item2 = { id: 1, name: 'book', price: 20, purchased: false };
  const item3 = { id: 2, name: 'macbook', price: 2000, purchased: false };

  const purchasedItem = { id: 1, name: 'book', price: 20, purchased: true }

  const items = {items: [item1, item2, item3]};

  it('should set initial state when nothing is passed in', () => {
    const state = listItemsReducer(undefined, {type: '__UNKNOWN'});

    expect(state.items).toEqual([]);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = listItemsReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('getItems', () => {
    it('should return all items', () => {
      let state = {
        items: {items: [item1, item2, item3]},
      };

      state = listItemsReducer(state, getItemsSuccess(items));
      expect(state.items).toEqual({
        items: [item1, item2, item3]
      });
    });
  });

  describe('itemSuccess', () => {
    it('should add an item', () => {
      let state = {
        items: [],
        isLoading: false
      };

      state = listItemsReducer(state, itemSuccess(item1));
      expect(state).toEqual({
        items: [item1],
        isLoading: false
      });
    });
  });

  describe('updateSuccess', () => {
    it('should update an item', () => {
      let state = {
        items: [item1, item2, item3],
        isLoading: false,
        isEditing: false
      };

      state = listItemsReducer(state, updateSuccess({name: 'books', price: 50, purchased: false}));
      expect(state).toEqual({
        items: [item1, item2, item3],
        isLoading: false,
        isEditing: false
      });
    });
  });

  describe('deleteItemSuccess', () => {
    it('should delete an item', () => {
      let state = {
        items: [item1, item2, item3],
        isLoading: false
      };

      state = listItemsReducer(state, deleteItemSuccess(item1.id));
      expect(state).toEqual({
        items: [item2, item3],
        isLoading: false
      });
    });
  });

  describe('buyItem', () => {
    it('should change item to purchased', () => {
      let state = {
        items: [item1, item2, item3],
      };

      state = listItemsReducer(state, buyItem(item2.id));
      expect(state).toEqual({
        items: [item1, purchasedItem, item3],
      })
    });
  });

});


