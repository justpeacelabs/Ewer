import firebase from 'firebase';
import { firebaseAuth } from '../firebase';
import {
  INIT_AUTH,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';
import { Router, browserHistory } from 'react-router';

function authenticate(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}

export function initAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}

export function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user
  };
}

export function signInWithGoogle() {
  return authenticate(new firebase.auth.GoogleAuthProvider());
}

export function signInWithEmailAndPassword(credentials) {
  const { email, password } = credentials;
  return dispatch => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(signInSuccess(user));
        browserHistory.replace('/');
      })
      .catch(error => dispatch(signInError(error)));
  };
}

export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}
