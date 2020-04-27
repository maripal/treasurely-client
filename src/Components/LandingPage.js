import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LandingPage.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

        <section className="card-container">
          <div className="card">
            <FontAwesomeIcon className="card-icon" icon="dollar-sign" />
            <div className="card-content">
              <h5 className="card-title">Track your savings</h5>
              <p>Track your savings.</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon className="card-icon" icon="list-ul" />
            <div className="card-content">
              <h5 className="card-title">Add an item to your list</h5>
              <p>You can add anything that you wish to buy. It's your own wishlist.</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon className="card-icon" icon="tasks" />
            <div className="card-content">
              <h5 className="card-title">Buy item</h5>
              <p>When you have enough in your savings to buy a certain item, 
                it'll notify you by changing the 'buy' button color for that item. 
                If you decide to buy it, you can just check it off your list.
              </p>
            </div>
          </div>
        </section>
      </header>
    );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);