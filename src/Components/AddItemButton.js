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

  // closeModal = () => {
  //   this.setState({ showModal: false })
  // }

  handleShowModal = () => {
    this.setState({ showModal: !false })
  }

  handleHideModal = () => {
    this.setState({ showModal: false })
  };

  render() {
    const renderModal = this.state.showModal ? (
      <Modal title="Add Item" hideModal={this.handleHideModal} >
        <AddItemContainer closeModal={this.handleHideModal} />
      </Modal>
    ) : ''; 

    return (
      <div className="add-item-btn-container">
        <button className="add-item-btn" onClick={this.handleShowModal}>Add Item</button>
        {renderModal}
      </div>
    );
  }
};

export default AddItemButton;