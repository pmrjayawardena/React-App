import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import './index.css';
import rootReducer from './reducers';


let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
