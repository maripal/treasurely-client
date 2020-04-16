import totalReducer from './totalReducer';
import {
  getTotalSuccess,
  increaseTotalSuccess,
  decreaseTotalSuccess
} from '../actions';


describe('totalReducer', () => {
  const total = 100;

  it('should set initial state when nothing is passed', () => {
    const state = totalReducer(undefined, {type: '__UNKNOWN'});
    
    expect(state.total).toEqual(0);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = totalReducer(currentState, {type: '__UNKNOWN'});
    
    expect(state).toBe(currentState);
  });

  describe('getTotalSuccess', () => {
    it('should return total', () => {
      let state = {
        total: {total}
      };
  
      state = totalReducer(state, getTotalSuccess({total}));
      expect(state.total).toEqual({
        total
      });
    })
  });

  describe('increaseTotalSuccess', () => {
    it('should increase total', () => {
      let state = {
        total: 0
      };

      state = totalReducer(state, increaseTotalSuccess({total}));
      expect(state.total).toEqual({
        total
      });
    });
  });

  describe('decreaseTotalSuccess', () => {
    it('should decrease total', () => {
      let state = {
        total: 500
      };

      state = totalReducer(state, decreaseTotalSuccess({total}));
      expect(state.total).toEqual({
        total
      });
    });
  });

});

