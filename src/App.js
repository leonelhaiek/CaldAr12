import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import boilers from "./pages/boilers";
import buildings from "./pages/buildings";
import home from './pages/home';
import technician from './pages/technician';
import boilersType from './pages/boliersType';
import companies from './pages/companies';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path="/:resource" component={
            technician}/>
        <Route path="/" exact component={home}/>
        </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
