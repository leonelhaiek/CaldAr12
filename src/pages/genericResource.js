import React, { Component } from 'react';
import '../App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import resources from '../resources/index';
import TableFrame from '../components/TableFrame'
import SearchBox from '../components/SearchBox'
import PlusButton from '../components/PlusButton'
import EditForm from '../components/EditForm'

class tech extends Component {
  componentDidMount =  ()=>{

    switch(this.props.match.params.resource){
      case 'technicians':
        fetch('http://localhost:5000/api/technicians')
        .then( response => response.json())
        .then( (data) => {this.resources = data
          this.selRes = 0;
          this.forceUpdate();
        })
        .catch( (e) => {
          console.log('ERROR');
        })
        break;
      case 'boilers':
        fetch('http://localhost:5000/api/boilers')
        .then( response => response.json())
        .then( (data) => {this.resources = data
          this.selRes = 1;
          this.forceUpdate();
        })
        .catch( (e) => {
          console.log('ERROR');
        })
        break;
      case 'boilersType':
        fetch('http://localhost:5000/api/boilersType')
        .then( response => response.json())
        .then( (data) => {this.resources = data
          this.selRes = 2;
          this.forceUpdate();
        })
        .catch( (e) => {
          console.log('ERROR');
        })
        break;
      case 'buildings':
        fetch('http://localhost:5000/api/buildings')
        .then( response => response.json())
        .then( (data) => {this.resources = data
          this.selRes = 3;
          this.forceUpdate();
        })
        .catch( (e) => {
          console.log('ERROR');
        })       
        break;
      case 'companies':
        fetch('http://localhost:5000/api/companies')
        .then( response => response.json())
        .then( (data) => {this.resources = data
          this.selRes = 4;
          this.forceUpdate();
        })
        .catch( (e) => {
          console.log('ERROR');
        })       
          break;
      default:
        fetch('http://localhost:5000/api/boilers')
        .then( response => response.json())
        .then( (data) => {this.resources = data
          this.selRes = 1;
          this.forceUpdate();
        })
        .catch( (e) => {
          console.log('ERROR');
        })
        break;
    }
  };
  selRes = 0;
  resources = [];
  state = { resources: resources }

  delRes = (id) => {
    const len = this.resources.length;
    this.resources = this.resources.filter((res) => (res._id !== id) );
    if(this.resources.length < len) this.forceUpdate();
  }
  editRes = (id,fields) => {
    if(id === -1){
      let newRes = {};
      fields.forEach( (field) => {
        newRes[field.id] = field.value;
      });
      newRes['_id'] = Math.round(100000 * Math.random());
      this.resources.push(newRes);
    }
    else{
      this.resources.forEach((res) => {
        if(res._id === id){
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
              data={this.resources.filter((res) => (res._id === props.match.params.id) )}
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
