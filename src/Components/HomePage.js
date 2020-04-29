import React from 'react';
import { connect } from 'react-redux';
import { getItems, getTotal } from '../actions/index';
import requiresLogin from './Requires-Login';
import AddToTotalForm from './AddToTotalForm';
import ListItems from './ListItems';
import AddItemButton from './AddItemButton';
import './HomePage.css';

export class HomePage extends React.Component {
  componentDidMount() {
      this.props.getTotal();
      this.props.getItems();
  }

  render() {
    return (
      <main className="main-home-container">
        <section className="total-section">
          <div className={`total-container`}>
            <h1 className={`total`}>${this.props.total === null ? 'Loading...' : this.props.total.toFixed(2)}</h1>
            <AddToTotalForm />
          </div>
        </section>
        <AddItemButton />
        <section className="list-items-section">
          <ListItems />
        </section>
      </main>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    total: state.total.total,
    isLoggedIn: state.auth.authToken && state.auth.currentUser
  }
};

export default requiresLogin()(connect(mapStateToProps, { getItems, getTotal })(HomePage));