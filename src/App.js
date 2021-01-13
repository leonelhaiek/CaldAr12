import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import home from './pages/home';
import genericResource from './pages/genericResource';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/resources/:resource" component={genericResource}/>
            <Route path="/" exact component={home}/>
            <Route path="/login" exact component={home}/>
            <Route path="/signup" exact component={home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
