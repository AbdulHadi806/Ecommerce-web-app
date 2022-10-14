import {createStore, combineReducers } from "redux"
import mainReducer, {CountReducer} from "./reducer.js"

const allReducers = combineReducers({
    mainReducer,
    CountReducer,
  });

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store