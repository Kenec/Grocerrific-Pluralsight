import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';
import { loadGrocery } from '../actions/groceryActions';
import App from '../components/App';

const store = configureStore();
store.dispatch(loadGrocery())

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);