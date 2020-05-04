import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './Nav.css';

export class Nav extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // let logOutBtn;
    let navContent;
    if (!this.props.loggedIn) {
      navContent = (
        <Link to="/">Treasurely</Link>
      )
    } else if (this.props.loggedIn && this.props.currentUser.firstName) {
      navContent = (
        <div className="nav-content">
          <Link className="nav-home-greeting" to="/home">Hello, <span className="user-name">{this.props.currentUser.firstName}</span></Link>
          <button className="log-out-btn" onClick={() => this.logOut()}>Log Out</button>
        </div>
      );
    }

    return (
      <nav className="nav-container" role="navigation">
        {navContent}
      </nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Nav);