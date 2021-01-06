import { deleteResource } from '../redux/actions/resourceActions';
import { connect } from 'react-redux'
import { closeModal } from '../redux/actions/modalActions'
import { bindActionCreators } from 'redux'



const RemoveResourceMessage = ({
  closeModal,
  deleteResource,
  meta
}) => {
  const onDeleteResource = () => {
    deleteResource(meta.id,meta.route);
    closeModal();
  }

  return (
    <div>
      Are you sure you want to delete this {meta.route}?
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
    resourceList: state.resource.resourceList,
    resourceObject: state.resource.resourceObject,
    isLoading: state.resource.isLoading,
    meta: state.modal.meta
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RemoveResourceMessage);