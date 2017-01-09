import React from 'react';
import { connect } from 'react-redux';
import { bindActions } from '../util';
import reduce from '../reducers';
import * as actions from '../actions';
import AddRumour from './form/rumour-form';
import '../style/style.css';

@connect(reduce, bindActions(actions))
export default class App extends React.Component {
  render() {
    return (
      <div id="app" className="container">
        <div className="header">MY Rumours</div>

        <AddRumour />
      </div>
    );
  }
}
