import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LandingPage.css';
import { connect } from 'react-redux';

export function LandingPage(props) {
  
  if (props.isLoggedIn) {
    return <Redirect to="/home" />
  }
  
  return (
    <div className="landing-container">
      <header>
        <h1 className="main-heading">Treasurly</h1>
        <h2 className="sub-heading">
          <span className="sub-heading-first">Track your savings</span>
          <span className="sub-heading-second">&amp; create a wishlist</span>
        </h2>

        <LoginForm />
        <Link to="/signup" className="signup-link">Sign Up!</Link>
      </header>
    </div>
    );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);