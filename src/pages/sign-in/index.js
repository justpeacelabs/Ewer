import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { authActions } from "../../components/auth";

import bgImage from "../../assets/signup_bg.jpg";
import logo from "../../assets/logo.svg";
import { push } from 'react-router-redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const {signInWithGoogle, signInWithEmailAndPassword} = this.props;
    const {email, password} = this.state;
    signInWithEmailAndPassword({ email, password });
    event.preventDefault();
  }

  render() {
    const {signInWithGoogle, signInWithEmailAndPassword} = this.props;
    return (
      <div className="signin-container">
        <form className="is-fullheight" onSubmit={
          this.handleSubmit
        }>
          <div className="signin-container2" style="">
            <div className="is-fullwidth">

              <div className="signin-container2" style="">
                <img className="logo-img" src={logo} alt="My Rumours logo" />
              </div>
              <div className="signin-container2" style="">
                <input className="signin-input" placeholder="USERNAME" type="text" value={this.state.email} onChange={
                  this.handleUserChange
                } />
              </div>
              <div className="signin-container2" style="">
                <input className="signin-input" placeholder="PASSWORD" type="password" value={this.state.password} onChange={
                  this.handlePasswordChange
                } />
              </div>
              <div className="signin-container2" style="">
                <input className="signin-submit" type="submit" value="LOG IN" />
              </div>
              <div style={{ height: '70px' }} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = { signInWithGoogle: PropTypes.func.isRequired };

//=====================================
//  CONNECT
//-------------------------------------
export default connect(null, authActions)(SignIn);
