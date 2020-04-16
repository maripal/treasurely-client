import usersReducer from './users';
import { usersSuccess } from '../actions/users';


describe('usersReducer', () => {

  const user = { firstName: 'Maria', username: 'maria01', password: 'password' };

  it('should set initial state when nothing is passed', () => {
    const state = usersReducer(undefined, {type: '__UNKNOWN'});

    expect(state.user).toEqual('');
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = usersReducer(currentState, {type: '__UNKNOWN'});

    expect(state).toBe(currentState);
  });

  describe('usersSuccess', () => {
    it('should register new user', () => {
      let state = {
        user: {}
      };

      state = usersReducer(state, usersSuccess({user}));
      expect(state.user).toEqual({
        user
      });
    });
  });

});

