import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers";

const makeStore = (initialState) => {
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};

export default makeStore;
