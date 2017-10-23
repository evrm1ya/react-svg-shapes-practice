import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore(initialState) {
  if (process.env.NODE_ENV === 'production') {
    return createStore(reducer, initialState);
  }

  return createStore(
    reducer, 
    initialState,
    applyMiddleware(createLogger())
  );
}

