import React from 'react';
import AddItemContainer from './AddItemContainer';
import { connect } from 'react-redux';
import { modalOn, modalOff } from '../actions';

//Maybe, use this component as an open Modal button instead. & use it to be able to open both addItem & editItem
//forms, depending which button is clicked on? 
class AddItemButton extends React.Component {
/*   constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }; */

  handleShowClick = () => {
    //this.setState({ showModal: true })
    this.props.modalOn();
  }

  handleHideClick = () => {
    //this.setState({ showModal: false })
    this.props.modalOff();
  };

  render() {
    const renderModal = this.props.showModal ? (
      <AddItemContainer hideModal={this.handleHideClick} />
    ) : '';

    return (
      <div>
        <button onClick={this.handleShowClick}>Add Item+</button>
        {renderModal}
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    showModal: state.items.showModal
  }
}

export default connect(mapStateToProps, { modalOn, modalOff }) (AddItemButton);