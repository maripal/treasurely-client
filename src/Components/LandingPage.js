import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header>
        <h1 className="main-heading">Treasurly</h1>
        <h2 className="sub-heading">
          <span className="sub-heading-first">Track your savings</span>
          <span className="sub-heading-second">&amp; create a wishlist</span>
        </h2>

        <Link to="/home" className="home-link">Home</Link>
      </header>
    </div>
  );
};

export default LandingPage;