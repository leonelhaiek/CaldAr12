import React, { Component } from 'react';
import FormField from './FormField'
import '../css/form.css';
import { closeModal } from '../redux/actions/modalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class EditForm extends Component {
  state = {value : this.props.res.fields.map((field,index) => {
    return {
      index,
      id: field.id,
      value:this.props.data?this.props.data[0][field.id]:'',
      errorMsg: false,
      valid: false
    }
  })}
  onChange = (index,value) => this.setState(prevState => ({
    value: prevState.value.map(
      obj => (obj.index === index ? Object.assign(obj, {value: value}) :obj)
    )
  }));
  clearError = (index) => {
    this.setState(prevState => ({
      value: prevState.value.map(
      obj => (obj.index === index ? Object.assign(obj, {errorMsg: false}) :obj)
    )}));
  }
  validateInput = (index,pattern,value) => {

    if(!pattern.test(value)){
      this.setState(prevState => ({
        value: prevState.value.map(
          obj => (obj.index === index ? Object.assign(obj, {errorMsg: true}) :obj)
        )}));
        return false;
    }
    else{
      this.setState(prevState => ({
        value: prevState.value.map(
          obj => (obj.index === index ? Object.assign(obj, {errorMsg: false}) :obj)
        )}));
      return true;
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let pattern;
    this.state.value.forEach( (input) => {
      pattern = this.props.res.fields.filter( field => field.id === input.id);
      valid = valid & this.validateInput(input.index,pattern[0].pattern,input.value);
    });
    if(valid){
      this.props.editRes(this.props.data?this.props.data[0]._id:-1,this.state.value);
      //this.props.history.push(`/${this.props.route}`);
      this.props.closeModal();
    }

  }
  render() {
    let inputs = [];
    this.props.res.fields.forEach((field,index) => {
      inputs.push(<FormField
                    state={this.state.value[index]}
                    value={this.props.data}
                    field = {field}
                    index = {this.state.value[index].index}
                    key = {this.state.value[index].index}
                    onChange={this.onChange}
                    clearError={this.clearError}
                    validateInput={this.validateInput}
                  />);
    });
    return (
      <React.Fragment>
        <div className="form-header">
          <p>{this.props.res.title}</p>
          <p onClick={this.props.closeModal}>X</p>
        </div>
        <form onSubmit={this.onSubmit}>
          {inputs}
          <div className="submit-container">
            <input type="submit" value="Confirm"/>
          </div>
        </form>
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