import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'; // Импорт провайдера для хранилища
import store from './redux/store'; // Импорт обьекта из стора (хранилище)

import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './App.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
