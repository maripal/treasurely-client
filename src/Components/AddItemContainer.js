import React from 'react';
import { connect } from 'react-redux'; 
import { addItem } from '../actions';
import { reset } from 'redux-form';
import AddItemForm from './AddItemForm';
import Modal from './Modal';

class AddItemContainer extends React.Component {

  onSubmit = (formValues, dispatch) => {
    console.log(formValues);
    this.props.addItem(formValues);
    dispatch(reset('addItemForm'))
  }

  render() {
    return (
      <div>
        <Modal 
          title="Add Item"
          content={<AddItemForm onSubmit={this.onSubmit} />}
          hideModal={this.props.hideModal}
        />
      </div>
    );
  }
};

export default connect(null, { addItem })(AddItemContainer);