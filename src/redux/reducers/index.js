import { combineReducers } from 'redux'
import modal from './modalReducer'
import resource from './resourceReducer'

export default combineReducers({
  modal,
  resource
})