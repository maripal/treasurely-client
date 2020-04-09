import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshAuthToken } from '../actions/auth';

import Nav from './Nav';
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import './App.css';

export class App extends React.Component {
  componentDidUpdate (prevProps) {
    if(!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()), 60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/home" exact component={HomePage} />
        </Router>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);