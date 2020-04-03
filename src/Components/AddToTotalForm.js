import React from 'react';
import { reduxForm, Field, focus, reset } from 'redux-form';
import { connect } from 'react-redux';
import { getTotal, increaseTotal, minusTotal, getTotalAction } from '../actions';
import Input from './Input';
import './AddToTotalForm.css';

class AddToTotalForm extends React.Component {

  increaseTotal = value => {
    const { totalSavings } = value; 
    const updatedTotal = this.props.total + totalSavings;

    return this.props.dispatch(increaseTotal({totalSavings: updatedTotal}));
  }

  decreaseTotal = value => {
    // Write actioon in actions file and dispatch action here
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div>
          Total has been added!
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div>
          {this.props.error}
        </div>
      );
    }

    const { handleSubmit } = this.props;

    return (
      //  <div>
      //   <form className="total-form">
      //     <input 
      //       name="total"
      //       type="text"
      //       pattern="\d+(\.\d{0,2})?"
      //       onChange={this.onChange}
      //       placeholder="Add amount"
      //       value={this.state.amountInput}
      //       className="total-input"
      //       required
      //     />
      //     <button className="add-button" type="submit" onClick={this.addMoneySubmit}>+</button>
      //     <button className="minus-button" type="submit" onClick={this.subtractMoneySubmit}>-</button>
      //   </form>
      // </div> 

      <form
      //  onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}
       onSubmit={handleSubmit}
       className="total-form"
      >
        {successMessage}
        {errorMessage}
        <Field 
          name="totalSavings"
          type="number"
          component={Input}
          label="Amount"
          parse={val => Number(val)}
          required
        />
        <button 
          className="add-button" 
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
          onClick={handleSubmit(value => this.increaseTotal({ ...value }))}
        >
          +
        </button>
        <button
          className="minus-button"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          -
        </button>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    total: state.total.total
  };
};

AddToTotalForm = connect(mapStateToProps)(AddToTotalForm);

export default reduxForm ({
  form: 'updateTotal',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('updateTotal', Object.keys(errors)[0])),
  onSubmitSuccess: (result, dispatch) => dispatch(reset('updateTotal'))
})(AddToTotalForm);

//export default connect(null, { increaseTotal, minusTotal })(AddToTotalForm);