import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
import register from './register';
import drinks from './drinks'

const reducer = combineReducers({
  auth,
  cart,
  register
  drinks
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './cart';
export * from './register';
export * from './drinks';
