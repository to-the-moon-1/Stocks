import stocksReducer from "./stocks-reducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    stocksPage: stocksReducer
})

const store = createStore(reducers);

window.store = store

export default store;