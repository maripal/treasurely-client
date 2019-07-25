import React from 'react';
import { connect } from 'react-redux';
import AddItemForm from './AddItemForm';
import Modal from './Modal';

class EditItem extends React.Component {

  //Where the editItem action goes
  handleSubmit = formValues => {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <Modal
          title="Edit Form"
          content={<AddItemForm onSubmit={this.handleSubmit} />}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(EditItem);