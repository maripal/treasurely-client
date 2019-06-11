import React from 'react';
import { connect } from 'react-redux';
import AddToTotalForm from './AddToTotalForm';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        HomePage
        <h1>{this.props.total.toFixed(2)}</h1>
        <AddToTotalForm />
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