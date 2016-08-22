require('babel-polyfill');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { INITIAL_STATE } from './core';
import App from './containers/App';

const store = configureStore(INITIAL_STATE);
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  root
);
