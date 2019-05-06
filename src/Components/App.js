import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import HomePage from './HomePage';
import AddItem from './AddItem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/additem" exact component={AddItem} />
        </Router>
      </div>
    )
  }
}

export default App;