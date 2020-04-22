import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './AddItemForm.css';


const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter an item name"
  }

  if (!formValues.price) {
    errors.price = "You must enter a price"
  }

  return errors;
}

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div>
        <p className="error-text">*{error}</p>
      </div>
    )
  }
};

const renderField = ({ input, label, type, meta }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input {...input} type={type} placeholder={label} className="input-box" />
      {renderError(meta)}
    </div>
  )
};

const AddItemForm = props => {

  const { handleSubmit } = props;
  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
        <Field
          name="name"
          component={renderField}
          type="text"
          label="Name"
        />
        <Field 
          name="price"
          component={renderField}
          type="number"
          label="Price"
          parse={val => Number(val)}
        />
        <button className="submit-item-button" type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ 
  form: 'addItemForm',
  validate 
})(AddItemForm);