import { createStore } from 'redux';
import handleLogin from './reducer/login.reducer';

export default createStore(handleLogin)