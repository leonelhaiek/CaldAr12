import React, { useState } from 'react';
import MaterialModal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';
import { showModal,closeModal } from '../redux/actions/modalActions'
import { modalTypes } from '../redux/types/modalTypes';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import EditForm from '../components/EditForm'
import DeleteResourceMessage from '../components/DeleteResourceMessage'

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${top}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadow[5],
    padding: theme.spacing(2,4,3),
    outline: 0,
  }
}));

const Modal = ({
  show,
  modalType,
  meta,
  closeModal
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  let modalComponent;
  switch(modalType) {
    case modalTypes.ADD_RESOURCE:
      modalComponent =  <EditForm
                      res = {meta.res}
                      editRes={meta.editRes}
                      route={meta.route}
                    />
    break;
    case modalTypes.DELETE_RESOURCE:
      modalComponent =  <DeleteResourceMessage
                          id={meta.id}
                          route={meta.route}
                          delRes={meta.delRes}
                        />
    break;
    case modalTypes.EDIT_RESOURCE:
      modalComponent =  <EditForm
                      res = {meta.res}
                      editRes={meta.editRes}
                      route={meta.route}
                      data={meta.data}
                    />
    break;
    default:
      modalComponent = null;
      break;
  }

  return( 
    <MaterialModal
      open={show}
      onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        {modalComponent}
      </div>
    </MaterialModal>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal: closeModal,
    showModal: showModal
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Modal);