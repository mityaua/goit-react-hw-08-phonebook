import axios from 'axios';
import { toast } from 'react-toastify';

import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Обьект токена
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Операция регистрации юзера
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    toast.error(error.message);
  }
};

// Операция авторизации юзера
const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    toast.error(error.message);
  }
};

// Операция выхода из профиля
const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
    toast.error(error.message);
  }
};

// Операция получения текущего пользователя (проверяем локальное хранилище через персист)
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    toast.error(error.message);
  }
};

// eslint-disable-next-line
export default { register, logIn, logOut, getCurrentUser };
