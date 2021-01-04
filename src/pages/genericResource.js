import React, { useEffect } from 'react';
import '../App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
// import resources from '../resources/index';
import TableFrame from '../components/TableFrame'
import SearchBox from '../components/SearchBox'
import PlusButton from '../components/PlusButton'
import EditForm from '../components/EditForm'
import { getResource,deleteResource,addResource,updateResource } from '../redux/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Tech = (props) => {
  
  useEffect(  () => {
    props.getResource(props.match.params.resource);
  },[]);
 

  const delRes = (id) => {
    props.deleteResource(id,props.match.params.resource);
  }
  const editRes = (id,fields) => {
    if(id === -1){
      let newRes = {};
      fields.forEach( (field) => {
        newRes[field.id] = field.value;
      });
      props.addResource(newRes, props.match.params.resource); 
    }
    else{
      props.resourceList.forEach((res) => {
        if(res._id === id){
          fields.forEach( (field) => {
            res[field.id] = field.value;
          });
          props.updateResource(res, props.match.params.resource);
        }
      })
    }
  }
    return (
      <Router>
      <div>
      <Header res = {props.resourceObject}/>
        <div className="card">
          <Route exact path={`/${props.resourceObject.route}`} render={properties => (
            <React.Fragment>
              <SearchBox />
              <TableFrame data = {props.resourceList} res = {props.resourceObject} delRes = {delRes} editRes = {editRes}/>
              <PlusButton path={`/${props.resourceObject.route}/add`} />
            </React.Fragment>
          )} />
          <Route exact path={`/${props.resourceObject.route}/add`} render={properties => (
            <EditForm
              res = {props.resourceObject.addForm}
              editRes={editRes}
              route={props.resourceObject.route}
            />
          )} />
          <Route exact path={`/${props.resourceObject.route}/edit/:id`} render={properties => (
            <EditForm
              data={props.resourceList.filter((res) => (res._id === properties.match.params.id) )}
              res={props.resourceObject.editForm}
              editRes={editRes}
              route={props.resourceObject.route}
            />
          )} />
        </div>
      </div>
    </Router>
    );

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResource: getResource,
    deleteResource: deleteResource,
    addResource: addResource,
    updateResource: updateResource
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    resourceList: state.resourceList,
    resourceObject: state.resourceObject,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tech);
