import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import home from './pages/home';
import genericResource from './pages/genericResource';
import login from './components/Login';
import { setAuthentication } from './redux/actions/authActions';
import { tokenListener } from './firebase';



const App = ({
  authenticated,
  setAuthentication,
}) => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAuthentication();
    }
  }, [setAuthentication]);
  
  useEffect(() => {
    tokenListener();
  }, []);

  if(authenticated){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/resources/:resource" component={genericResource}/>
            <Route path="/" exact component={home}/>
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={login}/>
          <Redirect path='/' to='/login' />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setAuthentication
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
