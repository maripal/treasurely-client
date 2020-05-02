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

    let { purchased } = item;
    purchased = !purchased

    this.props.buyItem(id, purchased).then(({item}) => {
      const { purchased } = item;
      // If purchased take item amount from total savings
      if (purchased === true) {
        const updatedTotal = this.props.total - amount;
        this.props.decreaseTotal({totalSavings: updatedTotal});
      } else if (purchased === false) {
        // This undos buy button click and returns item amount to total savings
        const updatedTotal = this.props.total + amount;
        this.props.increaseTotal({totalSavings: updatedTotal});
      }
    })
  }

  handleEditModal = id => {
    this.props.editItem(id);
    this.setState({ showModal: !false, editItemId: id })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  
  renderList = () => {
    return this.props.items.map(item => {
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
  return {
    total: state.total.total,
    items: state.items.items,
    jwt: state.auth.authToken
  };
};

export default connect(mapStateToProps, { deleteItem, decreaseTotal, buyItem, editItem, increaseTotal })(ListItems);