import React from 'react';
import AddItemContainer from './AddItemContainer';

//This comp will be a button that will open up the Modal(still have to work out that functionality)
class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  };

  handleShowClick = () => {
    console.log('add item button was clicked!');
    this.setState({ showModal: true })
  }

  render() {
    const renderModal = this.state.showModal ? (
      <AddItemContainer />
    ) : '';

    return (
      <div>
        <button onClick={this.handleShowClick}>Add Item+</button>
        {renderModal}
      </div>
    );
  }
};

export default AddItemButton;