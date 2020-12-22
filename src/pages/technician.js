import React, { Component } from 'react';
import '../App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import {technicians, boilers} from '../mocks/index';
import resources from '../resources/index';
import TableFrame from '../components/TableFrame'
import SearchBox from '../components/SearchBox'
import PlusButton from '../components/PlusButton'
import EditForm from '../components/EditForm'



class tech extends Component {
  componentDidMount =  ()=>{
    console.log(this.props.match.params.resource)
    switch(this.props.match.params.resource){
      case 'technician':
        this.resources = technicians;
        this.selRes = 0;
        break;
      case 'boilers':
        this.selRes = 1;
        this.resources = boilers;
        this.forceUpdate();
        break;
      default:
        this.selRes = 0;
        this.resources = technicians;
        break;
    }
  };
  selRes = 0;
  resources = technicians;
  state = { resources: resources }

  delRes = (id) => {
    const len = this.resources.length;
    this.resources = this.resources.filter((res) => (res.id !== parseInt(id)) );
    if(this.resources.length < len) this.forceUpdate();
  }
  editRes = (id,fields) => {
    if(id === -1){
      let newRes = {};
      fields.forEach( (field) => {
        newRes[field.id] = field.value;
      });
      newRes['id'] = Math.round(100000 * Math.random());
      this.resources.push(newRes);
    }
    else{
      this.resources.forEach((res) => {
        if(res.id === id){
          fields.forEach( (field) => {
            res[field.id] = field.value;
          });
        }
      })
    }
  }
  render() {
    return (
      <Router>
      <div>
        <Header res = {this.state.resources[this.selRes]}/>
        <div className="card">
          <Route exact path={`/${this.state.resources[this.selRes].route}`} render={props => (
            <React.Fragment>
              <SearchBox />
              <TableFrame data = {this.resources} res = {this.state.resources[this.selRes]} delRes = {this.delRes} editRes = {this.editRes}/>
              <PlusButton path={`/${this.state.resources[this.selRes].route}/add`} />
            </React.Fragment>
          )} />
          <Route exact path={`/${this.state.resources[this.selRes].route}/add`} render={props => (
            <EditForm
              res = {this.state.resources[this.selRes].addForm}
              editRes={this.editRes}
              route={this.state.resources[this.selRes].route}
            />
          )} />
          <Route exact path={`/${this.state.resources[this.selRes].route}/edit/:id`} render={props => (
            <EditForm
              data={this.resources.filter((res) => (res.id === parseInt(props.match.params.id)) )}
              res={this.state.resources[this.selRes].editForm}
              editRes={this.editRes}
              route={this.state.resources[this.selRes].route}
            />
          )} />
        </div>
      </div>
    </Router>
    );
  }
}

export default tech;











