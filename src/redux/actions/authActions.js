import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  LOGOUT_FETCHING,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED
} from '../types/authActions';

  
const loginFetching = () => {
  return {
    type: LOGIN_FETCHING
  }
};

const loginFulfilled = () => {
  return {
    type: LOGIN_FULFILLED
  }
};

const loginRejected = () => {
  return {
    type: LOGIN_REJECTED
  }
};

export const loginWithFirebase = credentials => dispatch=> {
  dispatch(loginFetching());
  return firebase.auth().signInWithEmailandPassword(credentials.email, credentials.password)
    .then(async(response) =>{
      const token = await response.user.getIdToken();
      localStorage.setItem('token',token);
      return dispatch(loginFulfilled());
    })
    .catch(() => {
      return dispatch(loginRejected());
    })
};

export const setAuthentication= () => {
  return{
    type: SET_AUTHENTICATION
  }
};

const logoutFetching = () => {
  return{
    type: LOGOUT_FETCHING
  }
};

const logoutFulfilled = () => {
  return {
    type: LOGOUT_FULFILLED
  }
};

const logoutRejected = () => {
  return {
    type: LOGOUT_REJECTED
  }
};

export const logout = () => dispatch => {
  dispatch(logoutFetching());
  return firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('token');
      return dispatch(logoutFulfilled());
    })
    .catch(() => {
      return dispatch(logoutRejected());
    })
}