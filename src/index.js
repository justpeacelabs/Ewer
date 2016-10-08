import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import './style';
import styles from './style/pure-min.css'

render((
  <div id="outer">
    <Provider store={store}>
    <App />
    </Provider>
    </div>
), document.body);
