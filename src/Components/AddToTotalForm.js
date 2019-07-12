import React from 'react';
import { connect } from 'react-redux';
import { addToTotal, minusTotal } from '../actions';

class AddToTotalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountInput: 0
    };
  };

  onChange = event => {
    this.setState ({ amountInput: event.target.value })
  }

  addMoneySubmit = event => {
    event.preventDefault();

    let numAmountInput = Number(this.state.amountInput);
    this.props.addToTotal(numAmountInput);
    this.setState ({ amountInput: 0 })
  } 

  subtractMoneySubmit = event => {
    event.preventDefault();

    let numAmountInput = Number(this.state.amountInput);
    this.props.minusTotal(numAmountInput);
    this.setState({ amountInput: 0 })
  }

  render() {
    return (
      <div>
        <form>
          <input 
            name="total"
            type="text"
            pattern="\d+(\.\d{0,2})?"
            onChange={this.onChange}
            placeholder="Add amount"
            value={this.state.amountInput}
            required
          />
          <button type="submit" onClick={this.addMoneySubmit}>Add Money</button>
          <button type="submit" onClick={this.subtractMoneySubmit}>Subtract Money</button>
        </form>
      </div>
    );
  }
};

export default connect(null, { addToTotal, minusTotal })(AddToTotalForm);