import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const combinedReducers = combineReducers({ reducer });

const middlewares = applyMiddleware(promiseMiddleware());

const store = createStore(combinedReducers);

export default store;
