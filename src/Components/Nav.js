import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Treasurly</Link>
    </div>
  );
};

export default Nav;