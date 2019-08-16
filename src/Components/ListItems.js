import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, minusTotal, buyItem, editItem } from '../actions';
import Item from './Item';
import Modal from './Modal';
import EditItem from './EditItem';

import './ListItems.css'

class ListItems extends React.Component {
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

    //subtract from total
    this.props.minusTotal(amount);
    //add action to change highlight color using the name
    this.props.buyItem(id);
  }

  //The modal opens now! Just have to add functionality to add edit item form here w/ proper item id
  //Going to have to add a different action to update edited item!
  handleEditModal = id => {
    //console.log(this.props.items[id]);
    this.props.editItem(id);
    console.log('edit button clicked' + id);
    this.setState({ showModal: !false, editItemId: id })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  
  renderList = () => {
    console.log(this.props)
    return this.props.items.map(item => {
      return (
        <div key={item.id} className={item.purchased ? 'purchased' : 'item'}>
          <Item {...item} clickDelete={this.handleDelete} editClick={this.handleEditModal} buyClick={this.handleBuyClick} />
        </div>
      )
    });
  };

  render() {
    console.count();
    const renderEditModal = this.state.showModal ? (
      <Modal title="Edit Item Modal" hideModal={this.handleCloseModal}>
        <EditItem id={this.state.editItemId} />
      </Modal>
    ) : '';

    return (
      <div>
        {this.renderList()}
        {renderEditModal}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.items)
  return {
    items: state.items.items,
  };
};

export default connect(mapStateToProps, { deleteItem, minusTotal, buyItem , editItem })(ListItems);