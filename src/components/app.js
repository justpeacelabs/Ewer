import React from 'react';
import '../style/style.css';

export default class App extends React.Component {
  render() {
    return (
      <div id="app" className="container">
        {this.props.children}
      </div>
    );
  }
}
