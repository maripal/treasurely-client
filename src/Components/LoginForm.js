import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './LoginForm.css';

export class LoginForm extends React.Component {
  onSubmit = values => {
    const { username, password } = values;
    return this.props.dispatch(login(username, password));
  }

  render() {
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div>
          {this.props.error}
        </div>
      );
    }

    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} className="login-form">
        {errorMessage}
        <Field 
          name="username"
          type="text"
          component={Input}
          label="Username"
          validate={[required, nonEmpty]}
        />
        <Field 
          name="password"
          type="text"
          component={Input}
          label="Password"
          validate={[required, nonEmpty]}
        />
      </form>
    );
  }
};

export default reduxForm ({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);