import React from 'react';
import { connect } from 'react-redux'; 
import { addItem } from '../actions';
import { reset } from 'redux-form';
import AddItemForm from './AddItemForm';

class AddItemContainer extends React.Component {

  onSubmit = (formValues, dispatch) => {
    console.log(formValues);
    this.props.addItem(formValues);
    dispatch(reset('addItemForm'))
  }

  render() {
    return (
      <div>
        <AddItemForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};

export default connect(null, { addItem })(AddItemContainer);