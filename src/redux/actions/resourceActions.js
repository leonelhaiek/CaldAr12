import {
  GET_RESOURCE_FETCHING,
  GET_RESOURCE_FULFILLED,
  GET_RESOURCE_REJECTED,
  ADD_RESOURCE_FETCHING,
  ADD_RESOURCE_FULFILLED,
  ADD_RESOURCE_REJECTED,
  UPDATE_RESOURCE_FETCHING,
  UPDATE_RESOURCE_FULFILLED,
  UPDATE_RESOURCE_REJECTED,
  DELETE_RESOURCE_FETCHING,
  DELETE_RESOURCE_FULFILLED,
  DELETE_RESOURCE_REJECTED
} from '../types/resourceTypes'



const URL = 'http://localhost:5000/api/';
const getResourceFetching = () => ({
  type: GET_RESOURCE_FETCHING
});

const getResourceFulfilled = (payload,resource) => ({
  type: GET_RESOURCE_FULFILLED,
  payload,
  resource
});

const getResourceRejected = () => ({
  type: GET_RESOURCE_REJECTED
});

export const getResource = (resource) => dispatch => {
  dispatch(getResourceFetching());
  return fetch( URL + resource, {
    method: 'GET',
    mode: 'cors',
    headers:
    { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      token: localStorage.getItem('token')}
  } )
    .then(data => data.json())
    .then((response) => {
      dispatch(getResourceFulfilled(response,resource));
    })
    .catch(() => {
      dispatch(getResourceRejected());
    });
};

const addResourceFetching = () => ({
  type: ADD_RESOURCE_FETCHING
});

const addResourceFulfilled = (payload,resource) => ({
  type: ADD_RESOURCE_FULFILLED,
  payload,
  resource
});

const addResourceRejected = () => ({
  type: ADD_RESOURCE_REJECTED
});

export const addResource = (payload,resource) => dispatch => {
  dispatch(addResourceFetching());
  return fetch( URL + resource, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  } )
    .then(data => data.json())
    .then((response) => {
      dispatch(addResourceFulfilled(response,resource));
    })
    .catch(() => {
      dispatch(addResourceRejected());
    });
};

const updateResourceFetching = () => ({
  type: UPDATE_RESOURCE_FETCHING
});

const updateResourceFulfilled = (payload,resource) => ({
  type: UPDATE_RESOURCE_FULFILLED,
  payload,
  resource
});

const updateResourceRejected = () => ({
  type: UPDATE_RESOURCE_REJECTED
});

export const updateResource = (payload,resource) => {
  return dispatch => {
    dispatch(updateResourceFetching());
    return fetch(`${URL}${resource}/${payload._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( payload )      
    })
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch(updateResourceFulfilled(payload,resource))
      })
      .catch(error => {
        return dispatch(updateResourceRejected())
      })
  }
}

const deleteResourceFetching = () => ({
  type: DELETE_RESOURCE_FETCHING
});

const deleteResourceFulfilled = (payload,resource) => ({
  type: DELETE_RESOURCE_FULFILLED,
  payload,
  resource
});

const deleteResourceRejected = () => ({
  type: DELETE_RESOURCE_REJECTED
});

export const deleteResource = (id,resource) => dispatch => {
  dispatch(deleteResourceFetching());
  return fetch( `${URL}${resource}/${id}`, { method: 'DELETE'} )
    .then(data => data.json())
    .then(() => {
      dispatch(deleteResourceFulfilled(id,resource));
    })
    .catch(() => {
      dispatch(deleteResourceRejected());
    });
};