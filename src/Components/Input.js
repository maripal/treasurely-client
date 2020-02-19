import React from 'react';

class Input extends React.Component {
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
    warning = <div className="form-warning">{this.props.meta.warning}</div>
    }
    return (
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <Element 
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}
;
export default Input;