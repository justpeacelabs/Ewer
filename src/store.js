import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { initAuth, authReducer } from './components/auth';
import appReducer from './reducers';

const reducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  routing: routerReducer,
  app: appReducer
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

const INITIAL_STATE = {};

const store = createStore(reducer, INITIAL_STATE, middleware);
export default store;