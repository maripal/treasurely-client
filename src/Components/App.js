import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUpForm from './SignUpForm';
import HomePage from './HomePage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUpForm} />
          <Route path="/home" exact component={HomePage} />
        </Router>
      </div>
    )
  }
}

export default App;