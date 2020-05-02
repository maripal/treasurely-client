import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { updateItem } from '../actions';
import EditItemForm from './EditItemForm';

export class EditItem extends React.Component {

  onSubmit = (formValues, dispatch) => {
    this.props.updateItem(this.props.id, formValues).then(() => this.props.closeModal());
    dispatch(reset('editItem'));
  }

  render() {
    return (
      <div className="edit-form-container">
       <EditItemForm key={this.props.id} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.items
  }
}

export default connect(mapStateToProps, { updateItem })(EditItem);