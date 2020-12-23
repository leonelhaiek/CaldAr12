import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/plusbutton.css';

class PlusButton extends Component {
  render() {
    return (
      <Link className="plus-button" to={this.props.path}>
        <i className="material-icons">add_circle</i>
      </Link>
    );
  }
}

export default PlusButton;