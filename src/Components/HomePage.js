import React from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import AddToTotalForm from './AddToTotalForm';
import ListItems from './ListItems';
import AddItemButton from './AddItemButton';

class HomePage extends React.Component {

  render() {
    let totalContainer = {
      backgroundColor: '#1d7c54',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: '0 0 35px 35px',
      padding: '25px'
    }

    let totalStyle = {
      textAlign: 'center',
      fontSize: '3em',
      marginTop: '65px',
      color: 'white'
    }

    return (
      <div>
        <div style={totalContainer}>
          <h1 style={totalStyle}>${this.props.total.toFixed(2)}</h1>
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