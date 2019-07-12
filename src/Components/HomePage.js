import React from 'react';
import { connect } from 'react-redux';
import AddToTotalForm from './AddToTotalForm';
import ListItems from './ListItems';
import AddItemButton from './AddItemButton';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        HomePage
        <h1>${this.props.total.toFixed(2)}</h1>
        <AddToTotalForm />
        <AddItemButton />
        <ListItems />
      </div>
    );
  }
};

//FIGURE OUT WHY CONSOLE BELOW LOGS OUT TWICE & EVERY TIME I CLICK INSIDE AN INPUT
//Above happens because I import 'AddItemButton' component, but WHY? Has something to do w/ Redux Form(?)

const mapStateToProps = state => {
  console.log(state);
  return {
    total: state.total
  }
}

export default connect(mapStateToProps)(HomePage);