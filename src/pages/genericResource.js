import React, { useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import TableFrame from '../components/TableFrame'
import SearchBox from '../components/SearchBox'
import '../css/plusbutton.css';
import { getResource,deleteResource,addResource,updateResource } from '../redux/actions/resourceActions';
import { showModal } from '../redux/actions/modalActions';
import Modal from '../components/Modal'
import { modalTypes } from '../redux/types/modalTypes';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Tech = (props) => {
  
  useEffect(  () => {
    props.getResource(props.match.params.resource);
  },[]);
 
  const showAddModal = () => {
    props.showModal(modalTypes.ADD_RESOURCE, {
      res: props.resourceObject.addForm,
      editRes: editRes,
      route: props.resourceObject.route
    });
  };
  const showDeleteModal = (resourceId) => {
    props.showModal(modalTypes.DELETE_RESOURCE, {
      id: resourceId,
      route: props.resourceObject.route,
      delRes: delRes
    });
  };
  const showEditModal = (resourceId) => {
    props.showModal(modalTypes.EDIT_RESOURCE, {
      data: props.resourceList.filter((res) => (res._id === resourceId) ),
      res: props.resourceObject.editForm,
      editRes: editRes,
      route: props.resourceObject.route
    });
  };

  const delRes = (id) => {
    props.deleteResource(id,props.resourceObject.route);
  }
  const editRes = (id,values) => {
    if(id === -1){
      props.addResource(values, props.resourceObject.route); 
    }
    else{
      props.resourceList.forEach((res) => {
        if(res._id === id){
          Object.keys(values).forEach( (field) => {
            res[field] = values[field];
          });
          props.updateResource(res, props.resourceObject.route);
        }
      })
    }
  }
    return (
      <React.Fragment>
        <Header res = {props.resourceObject}/>
          <div className="card">
            <SearchBox />
            <TableFrame data = {props.resourceList} res = {props.resourceObject} delRes = {showDeleteModal} editRes = {showEditModal}/>
            <div className="plus-button">
              <button  onClick={() => showAddModal()}><i className="material-icons">add_circle</i></button>
            </div>
        </div>
        <Modal/>
      </React.Fragment>
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
    resourceList: state.resource.resourceList,
    resourceObject: state.resource.resourceObject,
    isLoading: state.resource.isLoading
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tech);
