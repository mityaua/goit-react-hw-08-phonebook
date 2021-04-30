import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // Импорт функции создания хранилища и прослойки
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Импорт функции персистеров и фикса консоли
import storage from 'redux-persist/lib/storage'; // Импорт локального хранилища
import logger from 'redux-logger'; // Импорт логгера

import { authReducer } from './auth'; // Импорт редюсера по авторизации
import { contactsReducer } from './contacts'; // Импорт редюсера по контактам

// Создание прослоек + логгер. Важен порядок!
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Добавляет логгер только для продакшена
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}

// Конфиг персистора
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Создание хранилища (корневой редюсер + прослойки + тулзы только для разработки)
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// Создание персистора
const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
