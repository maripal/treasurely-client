import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header>
        <h1>Treasurly</h1>
        <h2>
          <span>Track your savings</span>
          <span>& create a wishlist</span>
        </h2>

        <Link to="/home" className="home-link">Home</Link>
      </header>
    </div>
  );
};

export default LandingPage;