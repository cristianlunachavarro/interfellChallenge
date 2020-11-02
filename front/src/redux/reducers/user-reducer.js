import { LOGIN_USER, ERROR_LOGIN, CLEAR_ERROR } from '../constants'

const initialState = {
  user: {},
  info: {},
  error: null
} 

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {...state, user: action.user, info: action.info };
      case ERROR_LOGIN:
        return {...state, error: action.message }
      case CLEAR_ERROR:
        return {...state, error: null}  
      default:
        return state;
    }
  };
  