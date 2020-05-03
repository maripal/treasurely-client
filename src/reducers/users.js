import { 
  USERS_REQUEST, 
  USERS_SUCCESS, 
  USERS_ERROR 
} from '../actions/users';

const initialState = {
  user: '',
  isLoading: false, 
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case USERS_REQUEST: 
      return { ...state, isLoading: true, error: null };
    case USERS_SUCCESS:
      return { ...state, user: action.user, isLoading: false, error: null };
    case USERS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default: 
      return state;
  }
};