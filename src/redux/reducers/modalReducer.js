import {
  SHOW_MODAL,
  CLOSE_MODAL
} from '../types/modalTypes';

const initialState = {
  show: false,
  modalType: null,
  meta: {}
};
const modalReducer = ( state = initialState, action) => {
  console.log("modalReducer:",action.type);
  switch (action.type) {
    case SHOW_MODAL:
      console.log("Show modal:",action.modalType);
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        meta: action.meta
      }
    case CLOSE_MODAL:
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
}

export default modalReducer;