import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import studentReducer from "./studentReducer";
//use the reducers
const reducers = {
    students: studentReducer,
};

const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

