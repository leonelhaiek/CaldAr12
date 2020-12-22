import React, { Component } from 'react';
import '../App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import {boilersType} from '../mocks/index';
import resources from '../resources/index';
import TableFrame from '../components/TableFrame'
import SearchBox from '../components/SearchBox'
import PlusButton from '../components/PlusButton'
import EditForm from '../components/EditForm'


class boilersT extends Component {
    resources = boilersType;
    state = {
      resources:
      [
        {
          id: 1,
          title: 'Type of Boilers',
          data: boilersType,
          fields:
            [//Order matters
              'Category',
              'Description',
              'Skills',
              'Actions'
            ],
            editForm:
            {
              title: 'Edit type of boiler',
              fields:
              [
                {id:'Category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
                {id:'Description',type: 'text', name:'Description', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
                {id:'Skills',type: 'text', name:'Skills', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              ]
            },
            addForm:
            {
              title: 'Add new type of boiler' ,
              fields:
              [
                {id:'Category',type: 'text', name:'Category', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
                {id:'Description',type: 'text', name:'Description', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
                {id:'Skills',type: 'text', name:'Skills', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              ]
            }
        },
        {
          id: 2,
          title: 'Boilers',
        }
      ]
    }
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
       
          <div>
            <Header res = {this.state.resources[0]}/>
            <div className="card">
              
                <React.Fragment>
                  <SearchBox />
                  <TableFrame data = {this.resources} res = {this.state.resources[0]} delRes = {this.delRes} editRes = {this.editRes}/>
                  <PlusButton />
                </React.Fragment>
            
             
                <EditForm
                  res = {this.state.resources[0].addForm}
                  editRes={this.editRes}
                />
              
             
                <EditForm
                  data={this.resources.filter((res) => (res.id === parseInt(this.props.match.params.id)) )}
                  res={this.state.resources[0].editForm}
                  editRes={this.editRes}
                />
              ) 
            </div>
          </div>
        
      );
    }
  }
  
  export default boilersT;