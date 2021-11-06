import { combineReducers, createStore } from 'redux';
import stocksReducer from './stocks-reducer';

const reducers = combineReducers({
  stocksPage: stocksReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
