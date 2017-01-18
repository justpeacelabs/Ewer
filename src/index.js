import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';
// import store from './store';
import { reducer as reduxFormReducer } from 'redux-form';
import { initAuth, authReducer } from './components/auth';
import { getRoutes } from './routes';
import injectTapEventPlugin from 'preact-tap-event-plugin';

injectTapEventPlugin();

const reducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  routing: routerReducer
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== 'production') {
  // configure redux-devtools-extension
  // @see https://github.com/zalmoxisus/redux-devtools-extension
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    middleware = compose(middleware, devToolsExtension());
  }
}

const store = createStore(reducer, {}, middleware);
const rootElement = document.getElementById('root');
const history = syncHistoryWithStore(browserHistory, store);

function render() {
  ReactDOM.render((
    <div id="outer">
      <Provider store={store}>
        <Router history={history} routes={getRoutes(store.getState)} />
      </Provider>
    </div>
  ), rootElement);
}

initAuth(store.dispatch)
  .then(() => render())
  .catch(error => console.error('AUTH ERROR', error)); // eslint-disable-line no-console