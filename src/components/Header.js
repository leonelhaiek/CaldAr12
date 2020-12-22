import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <a href="/">
                <i className="material-icons">arrow_back</i>
        </a>
        <p>
          {this.props.res.title}
        </p>
      </header>
    );
  }
}

export default Header;
