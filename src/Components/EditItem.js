import React from 'react';
import { connect } from 'react-redux';
import AddItemForm from './AddItemForm';

//container for edit item form 
class EditItem extends React.Component {

  render() {
    return (
      <div>
        EditItem
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    item: state.items.items
  }
};

export default connect(mapStateToProps)(EditItem);