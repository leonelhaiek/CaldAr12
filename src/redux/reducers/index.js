import resources from '../../resources/index';
import {
  GET_RESOURCE_FETCHING,
  GET_RESOURCE_FULFILLED,
  GET_RESOURCE_REJECTED,
  ADD_RESOURCE_FETCHING,
  ADD_RESOURCE_FULFILLED,
  ADD_RESOURCE_REJECTED,
} from '../types'

const initialState = {
  resourceList: [{'_id':'asdjhahsd','field':'No data available'}],
  error: null,
  isLoading: true,
  resourceObject: {
    title: 'Loading',
    route: 'loading',
    fields:
      [//Order matters
        'No data available',
        'Actions'
      ],
      editForm:
      {
        title: 'No data available',
        fields:
        [
          {id:'field',type: 'number', name:'No data available', onError:'Reload the page', pattern: /^[a-z]{3,}$/i},
        ]
      },
      addForm:
      {
        title: 'No data available' ,
        fields:
        [
          {id:'field',type: 'number', name:'No data available', onError:'Reload the page', pattern: /^[a-z]{3,}$/i},
        ]
      }
  }
}

const resourceReducer = ( state = initialState, action) => {
  switch(action.type) {
      case GET_RESOURCE_FETCHING:
      console.log(GET_RESOURCE_FETCHING);
      return {
          ...state,
          isLoading: true
      }
      case GET_RESOURCE_FULFILLED:
      console.log(GET_RESOURCE_FULFILLED);
      return {
          ...state,
          isLoading: false,
          resourceList: action.payload,
          resourceObject: (action.resource === 'technicians')?resources[0]:
                          (action.resource === 'boilers')?resources[1]:
                          (action.resource === 'boilersType')?resources[2]:
                          (action.resource === 'buildings')?resources[3]:
                          (action.resource === 'companies')?resources[4]:
                          resources[0]
            
      }
      case GET_RESOURCE_REJECTED:
      console.log(GET_RESOURCE_REJECTED);
      return {
          ...state,
          isLoading: false,
          error: 'ERROR'
      }
      case  ADD_RESOURCE_FETCHING:
      return {
          ...state,
          isLoading: true
      }
      case ADD_RESOURCE_FULFILLED:
      return {
         ...state,
         isLoading: false,
         resourceList: [...state.resourceList, action.payload]
      }
      case ADD_RESOURCE_REJECTED:
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