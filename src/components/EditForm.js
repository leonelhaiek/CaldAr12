import React, { Component } from 'react';
import FormField from './FormField'
import '../css/form.css';
import { closeModal } from '../redux/actions/modalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'react-final-form'

class EditForm extends Component {
  onSubmit = (values) => {
    this.props.editRes(this.props.data?this.props.data[0]._id:-1,values);
    this.props.closeModal();
  }
  initValueGenerator = () => {
    let initVal = {};
    this.props.res.fields.forEach(field => {
      initVal[field.id] = this.props.data?this.props.data[0][field.id]:'';
    });
    return initVal;
  }
  render() {
    let inputs = [];
    this.props.res.fields.forEach((field,index) => {
      inputs.push(<FormField
                    field = {field}
                    key = {index}
                  />);
    });
    return (
      <React.Fragment>
        <div className="form-header">
          <p>{this.props.res.title}</p>
          <p onClick={this.props.closeModal}>X</p>
        </div>
        <Form 
          initialValues={this.initValueGenerator()}
          onSubmit={ formObj => this.onSubmit(formObj)}>
          {({ handleSubmit }) => (
            <form className="edit-form" onSubmit={handleSubmit}>
              {inputs}
              <div className="submit-container">
                <input type="submit" value="Confirm"/>
              </div>
            </form>
          )}
        </Form>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal: closeModal
  }, dispatch);
};

const mapStateToProps = state => {
  return {
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(EditForm);