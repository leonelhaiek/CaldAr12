import firebase from 'firebase/app';
import 'firebase/auth';
import store from '../redux';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY || '',
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || '',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID || '',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || '',
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || '',
};
// Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const setToken = async (user) =>{
  const auth = store.getState().auth;
  if(auth.authenticated) {
    const token = await user.getIdToken();
    localStorage.setItem('token', token);
  }
};

export const tokenListener = () => {
firebase.auth().onIdTokenChanged((user) => {
  if(user) {
    setToken(user);
  }
});
};

export default firebaseApp;
