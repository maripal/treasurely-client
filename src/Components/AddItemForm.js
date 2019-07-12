import React from 'react';
import { Field, reduxForm } from 'redux-form';

/* class AddItemForm extends React.Component {

  onSubmit = formValues => {
    //console.log(formValues)
    this.props.onSubmit(formValues)
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item name</label>
          <Field name="itemName" component="input" type="text" placeholder="Item name" />
        </div>
        <button>Submit</button>
      </form>
    );
  };
} */

//BUG to fix here: When I enter price on first try it returns an error about valid value(about decimals). BUT 
//if I click out of the input & then click back it works & form successfully submits. (???)

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
        <p>{error}</p>
      </div>
    )
  }
};

const renderField = ({ input, label, type, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={label} />
      {renderError(meta)}
    </div>
  )
};

const AddItemForm = props => {

  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ 
  form: 'addItemForm',
  validate 
})(AddItemForm);