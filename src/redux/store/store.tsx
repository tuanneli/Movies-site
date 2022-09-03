import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from "redux-thunk";
import {topsPageReducer} from "../topsPageReducer";

const reducer = combineReducers({
    topsPage: topsPageReducer
})

export const store = legacy_createStore(reducer, applyMiddleware(thunk))
