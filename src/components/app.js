import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../util';
import reduce from '../reducers';
import * as actions from '../actions';
import TodoItem from './todo-item';
import AddRumour from './rumour-form';


@connect(reduce, bindActions(actions))
export default class App extends Component {
  render({ todos }, { text }) {
    return (
      <div id="app">
	<AddRumour />
      </div>
    );
  }
}
