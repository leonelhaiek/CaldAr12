import React from 'react';
import { withRouter } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import '../css/header.css';
import { LOGOUT_FULFILLED } from '../redux/types/authTypes';
import { logout } from '../redux/actions/authActions'

const Header = ({
  logout,
  history,
  res,
}) => {
  const onLogoutClick = () => {
    logout().then(action => {
      if(action.type === LOGOUT_FULFILLED) {
        history.push("/");
      }
    });
  }
  
    return (
      <header className="app-header">
        <button onClick={() => history.push("/")}><i className="material-icons">arrow_back</i></button>
        <p>
          { res.title }
        </p>
        <button onClick={() => onLogoutClick() }>Logout</button>
      </header>
    );
  
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout: logout
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    resourceObject: state.resource.resourceObject,
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Header));
