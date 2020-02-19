import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './Input';
import { required, isTrimmed, pwMinLength, pwMaxLength, usernameMinLength } from '../validators';

export class SignUp extends React.Component {
  onSubmit = values => {
    console.log(values);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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
      </form>
    )
  }
}

export default reduxForm ({
  form: 'signup',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);