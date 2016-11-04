import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import store from './store';
import App from './components/app';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});

const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

ReactDOM.render((
  <div id="outer">
    <Provider store={store}>
      <App />
    </Provider>
  </div>
), document.getElementById('root'));
