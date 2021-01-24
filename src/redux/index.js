import thunk from 'redux-thunk'
import { createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


const configureStore = () => {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  );
  return createStore(rootReducer, enhancer);
}

const store = configureStore();

export default store;