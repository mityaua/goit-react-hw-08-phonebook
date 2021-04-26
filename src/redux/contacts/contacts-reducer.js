import { combineReducers } from '@reduxjs/toolkit'; // Импорт функции комбайна редюсеров
import { createReducer } from '@reduxjs/toolkit'; // Импорт функции создания редюсера

import actions from './contacts-actions'; // Импорт экшенов из контактов в редюсеры

// Создание редюсера для массива items в контактах (фетч всех контактов, добавление и удаление контакта)
const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) =>
    payload.sort((a, b) => a.name.localeCompare(b.name)),
  [actions.addContactSuccess]: (state, { payload }) => [payload, ...state],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// Создание редюсера для фильтра в контактах
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// Создание редюсера индикации загрузки
const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

// Создание редюсера обработки ошибок
const error = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.deleteContactError]: (_, { payload }) => payload,

  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsSuccess]: () => null,

  [actions.addContactRequest]: () => null,
  [actions.addContactSuccess]: () => null,

  [actions.deleteContactRequest]: () => null,
  [actions.deleteContactSuccess]: () => null,
});

// Экспорт всех редюсеров через комбайн
export default combineReducers({ items, filter, loading, error });
