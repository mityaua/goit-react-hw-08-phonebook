import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
