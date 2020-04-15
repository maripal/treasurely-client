import {
  GET_TOTAL_SUCCESS,
  getTotalSuccess,
  INCREASE_TOTAL_SUCCESS,
  increaseTotalSuccess,
  DECREASE_TOTAL_SUCCESS,
  decreaseTotalSuccess,
  GET_ITEMS_SUCCESS,
  getItemsSuccess,
  ITEM_SUCCESS,
  itemSuccess,
  UPDATE_SUCCESS,
  updateSuccess,
  DELETE_ITEM_SUCCESS,
  deleteItemSuccess,
  BUY_ITEM,
  buyItem
} from './index';


describe('getTotal', () => {
  it('should return the action', () => {
    const amount = 100;
    const action = getTotalSuccess(amount);
    expect(action.type).toEqual(GET_TOTAL_SUCCESS);
    expect(action.amount).toEqual(amount);
  });
});

describe('increaseTotal', () => {
  it('should return the action', () => {
    const amount = 200;
    const action = increaseTotalSuccess(amount);
    expect(action.type).toEqual(INCREASE_TOTAL_SUCCESS);
    expect(action.amount).toEqual(amount);
  });
});

describe('decreaseTotal', () => {
  it('should return the action', () => {
    const amount = 50;
    const action = decreaseTotalSuccess(amount);
    expect(action.type).toEqual(DECREASE_TOTAL_SUCCESS);
    expect(action.amount).toEqual(amount);
  });
});

describe('getItems', () => {
  it('should return the action', () => {
    const items = [{ id: 0, name: 'books', price: 20 }, { id: 1, name: 'iPad Pro', price: 1000 }];
    const action = getItemsSuccess(items);
    expect(action.type).toEqual(GET_ITEMS_SUCCESS);
    expect(action.items).toEqual(items);
  });
});

describe('addItem', () => {
  it('should return the action', () => {
    const item = { id: 0, name: 'bike', price: 300 };
    const action = itemSuccess(item);
    expect(action.type).toEqual(ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });
});

describe('updateItem', () => {
  it('should return the action', () => {
    const item = { id: 0, name: 'bike', price: 200 };
    const action = updateSuccess(item);
    expect(action.type).toEqual(UPDATE_SUCCESS);
    expect(action.item).toEqual(item);
  });
});

describe('deleteItem', () => {
  it('should return the action', () => {
    const item = { id: 0, name: 'bike', price: 200 };
    const action = deleteItemSuccess(item);
    expect(action.type).toEqual(DELETE_ITEM_SUCCESS);
  });
});

describe('buyItem', () => {
  it('should return the action', () => {
    const id = 1;
    const action = buyItem(id);
    expect(action.type).toEqual(BUY_ITEM);
  });
});

