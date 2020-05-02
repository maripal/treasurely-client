import React from 'react';
import { connect } from 'react-redux'; 
import { addItem } from '../actions';
import { reset } from 'redux-form';
import AddItemForm from './AddItemForm';

export class AddItemContainer extends React.Component {

  onSubmit = (formValues, dispatch) => {
    this.props.addItem(formValues).then(() => this.props.closeModal());
    dispatch(reset('addItemForm'))
  }

  render() {
    return (
      <div className="add-item-form-container">
        <AddItemForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};

export default connect(null, { addItem })(AddItemContainer);