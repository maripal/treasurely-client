import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, minusTotal, buyItem, editItem } from '../actions';
import Item from './Item';
import './ListItems.css'

class ListItems extends React.Component {
  
  handleDelete = id => {
    this.props.deleteItem(id);
  };

  handleBuyClick = (amount, id) => {

    //subtract from total
    this.props.minusTotal(amount);
    //add action to change highlight color using the name
    this.props.buyItem(id);
  }

  //When an edit button is clicked. A modal w/ clicked item should open.
  //can connect this to redux state now!
  handleEdit = id => {
    //console.log('edit button clicked' + id);
    this.props.editItem(id);
    console.log('edit button clicked' + id);
  }

  renderList = () => {
    console.log(this.props)
    return this.props.items.map(item => {
      return (
        <div key={item.id} className={item.purchased ? 'purchased' : 'item'}>
          <Item {...item} clickDelete={this.handleDelete} editClick={this.handleEdit} buyClick={this.handleBuyClick} />
        </div>
      )
    });
  };

  render() {
    return (
      <div>
        {this.renderList()}
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