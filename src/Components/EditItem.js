import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { updateItem } from '../actions';
import EditItemForm from './EditItemForm';

//Got this working!!! :D Now, figure out if I need the renderEditItem method code or can just render the EditItemForm itself instead.
class EditItem extends React.Component {

  onSubmit = (formValues, dispatch) => {
    console.log(formValues);
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

const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.items.items
  }
}

export default connect(mapStateToProps, { updateItem })(EditItem);