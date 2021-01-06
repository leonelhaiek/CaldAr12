import React, { useEffect } from 'react';
import '../App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
// import resources from '../resources/index';
import TableFrame from '../components/TableFrame'
import SearchBox from '../components/SearchBox'
//import PlusButton from '../components/PlusButton'
import '../css/plusbutton.css';
import EditForm from '../components/EditForm'
import { getResource,deleteResource,addResource,updateResource } from '../redux/actions';
import { showModal,closeModal } from '../redux/actions/modalActions';
import Modal from '../components/Modal'
import { modalTypes } from '../redux/types/modalTypes';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Tech = (props) => {
  
  useEffect(  () => {
    props.getResource(props.match.params.resource);
  },[]);
 
  const showAddModal = () => {
    showModal(modalTypes.ADD_RESOURCE, {
      res: props.resourceObject.addForm,
      editRes: editRes,
      route: props.resourceObject.route
    });
  };
  const showDeleteModal = (resourceId) => {
    showModal(modalTypes.DELETE_RESOURCE, {
      id: resourceId,
      route: props.resourceObject.route,
      delRes: delRes
    });
  };
  const showEditModal = (resourceId) => {
    showModal(modalTypes.EDIT_RESOURCE, {
      data: props.resourceList.filter((res) => (res._id === resourceId) ),
      res: props.resourceObject.editForm,
      editRes: editRes,
      route: props.resourceObject.route
    });
  };

  const delRes = (id) => {
    props.deleteResource(id,props.resourceObject.route);
  }
  const editRes = (id,fields) => {
    if(id === -1){
      let newRes = {};
      fields.forEach( (field) => {
        newRes[field.id] = field.value;
      });
      props.addResource(newRes, props.resourceObject.route); 
    }
    else{
      props.resourceList.forEach((res) => {
        if(res._id === id){
          fields.forEach( (field) => {
            res[field.id] = field.value;
          });
          props.updateResource(res, props.resourceObject.route);
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
              <TableFrame data = {props.resourceList} res = {props.resourceObject} delRes = {showDeleteModal} editRes = {showEditModal}/>
              <div className="plus-button">
                <button  onClick={showAddModal}><i className="material-icons">add_circle</i></button>
              </div>
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
    updateResource: updateResource,
    showModal: showModal
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
