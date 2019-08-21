import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './EditItemForm.css';


const validate = formValues => {
  const errors = {};

  if (!formValues.itemName) {
    errors.itemName = "You must enter an item name"
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
        <p className="error-text">{error}</p>
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

const EditItemForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <Field 
          name="itemName"
          component={renderField}
          type="text"
          label="Item Name"
        />
        <Field
          name="price"
          component={renderField}
          type="number"
          label="Price"
          parse={val => Number(val)}
        />
        <button className="submit-button" type="submit">Update</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'editItem',
  validate
})(EditItemForm);