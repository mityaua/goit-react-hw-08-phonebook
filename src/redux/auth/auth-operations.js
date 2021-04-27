import axios from 'axios';
import { toast } from 'react-toastify';

import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// eslint-disable-next-line
const token = {};

// Операция регистрации юзера
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    toast.error(error.message);
  }
};

const logIn = () => dispatch => {};

const logOut = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

// eslint-disable-next-line
export default { register, logIn, logOut, getCurrentUser };
