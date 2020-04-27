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
      <header className="header-container">
        <div className="header-content">
          <h1 className="main-heading">Treasurely</h1>
          <h2 className="sub-heading">
            <span className="sub-heading-first">Track your savings</span>
            <span className="sub-heading-second"> &amp; create a wishlist.</span>
          </h2>
          <img className="landing-image" src="./images/Treasure_Chest_Illustration.png" alt="A treasure chest illustration" />
          <Link to="/signup" className="signup-link">Sign Up!</Link>
        </div>

        <div className="login-form-container">
          <h3 className="log-in-title">Log In</h3>
          <LoginForm />
        </div>
      </header>
    );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);