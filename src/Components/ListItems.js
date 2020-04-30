import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, decreaseTotal, buyItem, editItem, increaseTotal } from '../actions';
import Item from './Item';
import Modal from './Modal';
import EditItem from './EditItem';

import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      editItemId: undefined
    }
  };
  
  handleDelete = id => {
    this.props.deleteItem(id);
  };

  handleBuyClick = (amount, id) => {
    // Find item that buy was clicked to dispatch actions
    const item = this.props.items.find(item => item.id === id);
    
    if (!item.purchased) {
      const updatedTotal = this.props.total - amount;
      this.props.buyItem(id);
      this.props.decreaseTotal({totalSavings: updatedTotal});
    } else {
      // If buy click was a mistake, this changes state back when clicked again
      const updatedTotal = this.props.total + amount;
      this.props.increaseTotal({totalSavings: updatedTotal});
      item.purchased = false;
    }
  }

  handleEditModal = id => {
    console.log(id)
    this.props.editItem(id);
    console.log('edit button clicked' + id);
    this.setState({ showModal: !false, editItemId: id })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  
  renderList = () => {
    return this.props.items.map(item => {
      console.log(item)
      return (
        <div key={item.id} className={item.purchased ? 'purchased item-container' : 'item-container'}>
          <Item 
            className={this.props.total >= item.price && item.purchased === false ? 'notify-buy-btn' : ''} 
            {...item} 
            clickDelete={this.handleDelete} 
            editClick={this.handleEditModal} 
            buyClick={this.handleBuyClick} 
            innerText={item.purchased ? <FontAwesomeIcon icon="undo-alt" /> : 'Buy'} 
          />
        </div>
      )
    });
  };

  render() {
    const renderEditModal = this.state.showModal ? (
      <Modal title="Edit Item" hideModal={this.handleCloseModal}>
        <EditItem id={this.state.editItemId} closeModal={this.handleCloseModal} />
      </Modal>
    ) : '';

    return (
      <div className={this.props.items.length > 0 ? 'list-container' : ''}>
        {this.renderList()}
        {renderEditModal}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.items);
  return {
    total: state.total.total,
    items: state.items.items,
    jwt: state.auth.authToken
  };
};

export default connect(mapStateToProps, { deleteItem, decreaseTotal, buyItem, editItem, increaseTotal })(ListItems);