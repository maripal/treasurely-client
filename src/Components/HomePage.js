import React from 'react';
import { connect } from 'react-redux';
import AddToTotalForm from './AddToTotalForm';
import ListItems from './ListItems';
import AddItemButton from './AddItemButton';

class HomePage extends React.Component {

  render() {
    let containerStyle = {
      backgroundColor: '#1d7c54',
      height: '50vh',
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
      <div style={containerStyle}>
        <h1 style={totalStyle}>${this.props.total.toFixed(2)}</h1>
        <AddToTotalForm />
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