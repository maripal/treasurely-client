import React from 'react';
import { reduxForm, Field, focus, reset } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import { required, nonEmpty, isTrimmed, pwMinLength, pwMaxLength, usernameMinLength, matches } from '../validators';

const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
  onSubmit = values => {
    console.log(values);
    const { firstName, username, password } = values;
    const user = { firstName, username, password };
    
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
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
          name="firstName"
          type="text"
          component={Input}
          label="First Name"
          validate={[ required, nonEmpty, isTrimmed ]}
        />
        <Field 
          name="username"
          type="text"
          component={Input}
          label="Username"
          validate={[ required, nonEmpty, isTrimmed, usernameMinLength ]}
        />
        <Field 
          name="password"
          type="password"
          component={Input}
          label="Password"
          validate={[ required, nonEmpty, pwMinLength, pwMaxLength ]}
        />
        <Field 
          name="passwordConfirm"
          type="password"
          component={Input}
          label="Confirm password"
          validate={[ required, nonEmpty, matchesPassword ]}
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