import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // Импорт функции создания хранилища и прослойки
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Импорт функции персистеров и фикса консоли
import logger from 'redux-logger'; // Импорт функции логгирования

import { contactsReducer } from './contacts'; // Импорт редюсера по контактам
import { authReducer } from './auth'; // Импорт редюсера по авторизации

// Создание прослоек + логгер. Важен порядок!
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// Включить перед деплоем
// if (process.env.NODE_ENV === `development`) {
//   middleware.push(logger);
// }

// Создание хранилища (корневой редюсер + прослойки + тулзы только для разработки)
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
