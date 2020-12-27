import resources from '../../resources/index';
import {
  GET_RESOURCE_FETCHING,
  GET_RESOURCE_FULFILLED,
  GET_RESOURCE_REJECTED
} from '../types'

const initialState = {
  resourceList: [],
  error: null,
  isLoading: false,
  resourceObject: {}
}

const resourceReducer = ( state = initialState, action) => {
  switch(action.type) {
      case GET_RESOURCE_FETCHING:
      return {
          ...state,
          isLoading: true
      }
      case GET_RESOURCE_FULFILLED:
      return {
          ...state,
          isLoading: false,
          resourceList: action.payload,
          resourceObject: () => {
            switch(action.resource){
              case 'technicians':
                return resources[0];
              case 'boilers':
                return resources[1];
              case 'boilersType':
                return resources[2];
              case 'buildings':
                return resources[3];
              case 'companies':
                return resources[4];
              default:
                return resources[0];
              }
            }
      }
      case GET_RESOURCE_REJECTED:
      return {
          ...state,
          isLoading: false,
          error: 'ERROR'
      }
      default:
        return state;
    }
}

export default resourceReducer;