import {
  SHOW_MODAL,
  CLOSE_MODAL
} from '../types/modalTypes';

export const showModal = (modalType, meta = {}) => {
  console.log("Action showModal type:", modalType);
  return {
    type: SHOW_MODAL,
    modalType,
    meta
  };
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
}