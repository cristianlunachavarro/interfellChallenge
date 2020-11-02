import { LOGIN_USER, ERROR_LOGIN, CLEAR_ERROR, SET_MESSAGE } from '../constants'

const initialState = {
  user: {},
  info: {
    saldo: 0,
    transactions: []
  },
  message: null,
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
      case SET_MESSAGE:
        return {...state, message: action.message}  
      default:
        return state;
    }
  };
  