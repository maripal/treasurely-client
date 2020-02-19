import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './Input';
import { required, isTrimmed, pwMinLength, pwMaxLength, usernameMinLength } from '../validators';

export class SignUpForm extends React.Component {
  onSubmit = values => {
    console.log(values);
  }

  render() {
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
          validate={[ required, isTrimmed, usernameMinLength ]}
        />
        <Field 
          name="password"
          type="text"
          component={Input}
          label="Password"
          validate={[ required, pwMinLength, pwMaxLength ]}
        />
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

export default reduxForm ({
  form: 'signup',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);