import React from 'react';
import AddItemContainer from './AddItemContainer';
import Modal from './Modal';

export class AddItemButton extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }; 

  closeModal = () => {
    this.setState({ showModal: false })
  }

  handleShowClick = () => {
    this.setState({ showModal: !false })
  }

  handleHideClick = () => {
    this.setState({ showModal: false })
  };

  render() {
    const renderModal = this.state.showModal ? (
      <Modal title="Add Item" hideModal={this.handleHideClick} >
        <AddItemContainer closeModal={this.closeModal} />
      </Modal>
    ) : ''; 

    return (
      <div className="add-item-btn-container">
        <button className="add-item-btn" onClick={this.handleShowClick}>Add Item</button>
        {renderModal}
      </div>
    );
  }
};

export default AddItemButton;