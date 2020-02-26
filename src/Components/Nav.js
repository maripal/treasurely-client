import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './Nav.css';

class Nav extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutBtn;
    if (this.props.loggedIn) {
      logOutBtn = (
        <button onClick={() => this.logOut()}>Log Out</button>
      )
    }

    return (
      <div className="nav">
        <Link to="/">Treasurely</Link>
        {logOutBtn}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);