import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore,applyMiddleware} from 'redux'
import React from 'react';
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const configureStore = () => {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  );
  return createStore(rootReducer, enhancer);
}

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
