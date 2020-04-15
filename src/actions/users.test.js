import {
  USERS_SUCCESS,
  usersSuccess
} from './users';


describe('addUser', () => {
  it('should return the action', () => {
    const user = { firstName: 'Maria', username: 'maria01', password: 'password' };
    const action = usersSuccess(user);
    expect(action.type).toEqual(USERS_SUCCESS);
    expect(action.user).toEqual(user);
  });
});
