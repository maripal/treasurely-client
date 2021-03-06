import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

import './SignUpPage.css';

export function SignUpPage (props) {
  if (props.loggedIn) {
    return <Redirect to="/home" />
  }

  return (
    <div className="signup-form-container">
      <h1>Sign Up</h1>
      <SignUpForm />
      <p className="log-in-redirect">Already have an account? <Link to="/" className="log-in-link">Log in</Link>.</p>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);