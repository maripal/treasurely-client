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
      showModal: false
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
  handleEditModal = id => {
    //console.log('edit button clicked' + id);
    this.props.editItem(id);
    console.log('edit button clicked' + id);
    this.setState({ showModal: !false })
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
    const renderEditModal = this.state.showModal ? (
      <Modal title="Edit Item Modal" hideModal={this.handleCloseModal}>
        <EditItem title='hello' />
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