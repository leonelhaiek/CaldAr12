import { deleteResource } from '../redux/actions';
import { connect } from 'react-redux'
import { closeModal } from '../redux/actions/modalActions'
import { bindActionCreators } from 'redux'



const RemoveResourceMessage = ({
  closeModal,
  deleteResource,
  resource,
  resourceId
}) => {
  const onDeleteResource = () => {
    deleteResource(resource,resourceId);
    closeModal();
  }

  return (
    <div>
      Are you sure you want to delete this {resource}?
      <div>
        <button onClick={() => closeModal()}>Cancel</button>
        <button onClick={() => onDeleteResource()}>Confirm</button>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal: closeModal,
    deleteResource: deleteResource,
  }, dispatch);
};


const mapStateToProps = state => {
  return {
    resourceList: state.resourceList,
    resourceObject: state.resourceObject,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RemoveResourceMessage);