import React, { Component } from 'react';
import { showModal } from '../redux/actions/modalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import './App.css';

class TableRow extends Component {

  render() {
    let i = 0;
    let rowContent = [];
      for (var key in this.props.data){
          if((!key.startsWith('_'))&&(key !== 'updatedAt')&&(key !== 'createdAt')&&!key.startsWith('id'))
            rowContent.push(<td key = {i}>{this.props.data[key]}</td>);
          i++;
      }
    rowContent.push(
      <td key = {i}>
          <button onClick={() => this.props.editRes(this.props.data._id)}><i className="material-icons">create</i></button>
          <button onClick = {this.props.delRes.bind(this,this.props.data._id)}><i className="material-icons">delete</i></button>  
      </td>);
    return (
        <tr>
          {rowContent}
        </tr>
    );
  }
}

//export default TableRow;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    showModal: showModal
  }, dispatch);
};

const mapStateToProps = state => {
  return {
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(TableRow);