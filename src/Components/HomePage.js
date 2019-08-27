import React from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import AddToTotalForm from './AddToTotalForm';
import ListItems from './ListItems';
import AddItemButton from './AddItemButton';
import './HomePage.css';

class HomePage extends React.Component {

  render() {
    //Changes total container color to notify when total is low
    let containerColor = this.props.total  <= 0 ? 'empty-total-notification' : this.props.total <= 50 ? 'low-total-notification' : '';

    //Changes text color so it's visible against low total color 
    let totalColor = this.props.total > 0 && this.props.total <= 50 ? 'low-total' : '';

    return (
      <div>
        <div className={`total-container ${containerColor}`}>
          <h1 className={`total ${totalColor}`}>${this.props.total.toFixed(2)}</h1>
          <AddToTotalForm />
        </div>
          <AddItemButton />
          <ListItems />
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    total: state.total
  }
}

export default connect(mapStateToProps)(HomePage);