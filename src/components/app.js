import React from 'react';
import classnames from 'classnames';
import '../style/style.css';
import '../style/menu.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeMenu: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({
      activeMenu: e ? !this.state.activeMenu : false
    });
  }

  render() {
    return (
      <div id="layout" className={classnames({
        active: this.state.activeMenu
      })}>
        <div id="menuLink" className="menu-link" onClick={this.toggle}>
          <span></span>
        </div>

        <div id="menu">
          <div className="pure-menu">
            <div className="brand">Rumours</div>
            <div className="menu-item-container">
              <div className="menu-item">See all</div>
            </div>

            <div className="menu-item-container">
              <div className="menu-item">Add Rumour</div>
            </div>

            <div className="menu-item-container">
              <div className="menu-item">Profile</div>
            </div>
          </div>
        </div>
        <div id="app" className="container" onClick={this.toggle.bind(this, false)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
