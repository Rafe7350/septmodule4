import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import dictionaryReducer from './redux/reducers/dictionaryReducer';
import historyReducer from './redux./reducers/historyReducer';

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  history: historyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
