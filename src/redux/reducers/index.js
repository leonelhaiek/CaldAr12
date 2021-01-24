import { combineReducers } from 'redux'
import modal from './modalReducer'
import resource from './resourceReducer'
import auth from './authReducer';

export default combineReducers({
  modal,
  resource,
  auth
})