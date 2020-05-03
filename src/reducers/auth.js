import { 
  SET_AUTH_TOKEN, 
  CLEAR_AUTH, 
  AUTH_REQUEST, 
  AUTH_SUCCESS, 
  AUTH_ERROR 
} from '../actions/auth';

const initialState = {
  authToken: null,
  currentUser: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.authToken };
    case CLEAR_AUTH:
      return { ...state, authToken: null, currentUser: null };
    case AUTH_REQUEST:
      return { ...state, isLoading: !false, error: null };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, currentUser: action.currentUser };
    case AUTH_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  };
};