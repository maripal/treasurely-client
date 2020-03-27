import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { updateItem } from '../actions';
import EditItemForm from './EditItemForm';

class EditItem extends React.Component {

  onSubmit = (formValues, dispatch) => {
    console.log(formValues);
    console.log(this.props.id, formValues)
    this.props.updateItem(this.props.id, formValues);
    dispatch(reset('editItem'));
  }

  render() {
    return (
      <div>
       <EditItemForm key={this.props.id} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps)
  return {
    items: state.items.items
  }
}

export default connect(mapStateToProps, { updateItem })(EditItem);