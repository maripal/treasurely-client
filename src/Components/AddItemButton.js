import React from 'react';
import AddItemContainer from './AddItemContainer';
import Modal from './Modal';

//Maybe, use this component as an open Modal button instead. & use it to be able to open both addItem & editItem
//forms, depending which button is clicked on? 
class AddItemButton extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }; 

  handleShowClick = () => {
    this.setState({ showModal: !false })
  
  }

  handleHideClick = () => {
    this.setState({ showModal: false })
  };

  render() {
    const renderModal = this.state.showModal ? (
      <Modal title="Add Item" hideModal={this.handleHideClick} >
        <AddItemContainer />
      </Modal>
    ) : ''; 

    let buttonStyle = {
      backgroundColor: '#071419',
      border: '1px solid #071419',
      borderRadius: '50px',
      color: 'white',
      padding: '15px 25px',
      width: '100%',
      marginTop: '50px',
      marginBottom: '30px'
    };

    return (
      <div>
        <button style={buttonStyle} onClick={this.handleShowClick}>Add Item</button>
        {renderModal}
      </div>
    );
  }
};

export default AddItemButton;