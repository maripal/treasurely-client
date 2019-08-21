import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Link to="/home" className="home-link">Home</Link>
    </div>
  );
};

export default LandingPage;