import React, { Component } from 'react';
import { withRouter } from "react-router";
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <button onClick={() => this.props.history.push("/")}><i className="material-icons">arrow_back</i></button>
        <p>
          {this.props.res.title}
        </p>
      </header>
    );
  }
}

export default withRouter(Header);
