import { combineReducers, compose, createStore } from 'redux';
import stocksReducer from '../reducers/stocks-reducer';

const reducers = combineReducers({
  stocksPage: stocksReducer,
});

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducers, composeEnhancers);

export default store;
