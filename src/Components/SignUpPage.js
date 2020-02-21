import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';

export function SignUpPage (props) {
  console.log(props)
  if (props.loggedIn) {
    return <Redirect to="/home" />
  }

  return (
    <div>
      <SignUpForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);