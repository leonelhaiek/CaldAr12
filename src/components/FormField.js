import React, { Component } from 'react';
import { Field } from 'react-final-form'

class FormField extends Component {

  validateInput = (value) => this.props.field.pattern.test(value)?undefined:this.props.field.onError;
  
  render() {
    return (
      <Field 
        name={this.props.field.id}
        validate={this.validateInput}
      >
        {({ input,meta }) => (
          <div>
            <label>{this.props.field.name}</label>
            <input 
              type={this.props.field.type} 
              name={this.props.field.id}  
              placeholder="Set Value"
              {...input}
            />
            {meta.error && !meta.active && meta.touched && <p>{this.props.field.onError}</p>}
          </div>
        )}
      </Field>
    );
  }
}

export default FormField;