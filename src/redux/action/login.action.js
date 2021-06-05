import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (result) => {
  return {
    type: LOGIN_SUCCESS,
    result
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}