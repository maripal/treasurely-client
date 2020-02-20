import React from 'react';
import { reduxForm, Field, SubmissionError, focus, reset } from 'redux-form';
import Input from './Input';
import { required, nonEmpty, isTrimmed, pwMinLength, pwMaxLength, usernameMinLength, matches } from '../validators';

export class SignUpForm extends React.Component {
  onSubmit = values => {
    console.log(values);
  }

  render() {
    console.log(this.props);
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div>
          You've successfully signed up!
        </div>
      );
    }
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div>
          {this.props.error}
        </div>
      )
    }
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {successMessage}
        {errorMessage}
        <Field 
          name="username"
          type="text"
          component={Input}
          label="Username"
          validate={[ required, nonEmpty, isTrimmed, usernameMinLength ]}
        />
        <Field 
          name="password"
          type="text"
          component={Input}
          label="Password"
          validate={[ required, nonEmpty, pwMinLength, pwMaxLength, matches ]}
        />
        <button 
          type="submit" 
          disabled={this.props.pristine || this.props.submitting}
        >
          Sign Up
        </button>
      </form>
    )
  }
}

export default reduxForm ({
  form: 'signup',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('signup', Object.keys(errors)[0])),
  // This resets fields after form is submitted successfully
  onSubmitSuccess: (result, dispatch) => dispatch(reset('signup'))
})(SignUpForm);