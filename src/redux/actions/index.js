import {
  GET_RESOURCE_FETCHING,
  GET_RESOURCE_FULFILLED,
  GET_RESOURCE_REJECTED
} from '../types'

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
  return fetch( URL + resource )
    .then(data => data.json())
    .then((response) => {
      dispatch(getResourceFulfilled(response,resource));
    })
    .catch(() => {
      dispatch(getResourceRejected());
    });
};