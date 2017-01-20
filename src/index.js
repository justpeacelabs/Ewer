import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'preact-tap-event-plugin';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import { getRoutes } from './routes';
import { initAuth } from './components/auth';

injectTapEventPlugin();

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