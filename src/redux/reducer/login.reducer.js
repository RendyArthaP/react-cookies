import Cookies from 'js-cookie';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../action/login.action';

const token = Cookies.token

const initialState = (token !== undefined && token !== null) 
? {
  isLogged: true,
  isLoading: false,
  error: false
} : {
  isLogged: false,
  isLoading: false,
  error: false
}

const handleLogin = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        error: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false
      }
    default:
      return state
  }
}

export default handleLogin