import {combineReducers} from 'redux'
import topsPageReducer from "../tops-page-reducer";
import filmPageReducer from "../film-page-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {actorsAPI, filmAPI, similarsAPI} from "../../components/API";

// const RootReducer = combineReducers({
//     topsPage: topsPageReducer
// })
//
//
// export const store = legacy_createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
//
// export type StoreType = ReturnType<typeof RootReducer>

const rootReducer = combineReducers({
    topsPageReducer,
    filmPageReducer,
    [filmAPI.reducerPath]: filmAPI.reducer,
    [similarsAPI.reducerPath]: similarsAPI.reducer,
    [actorsAPI.reducerPath]: actorsAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(filmAPI.middleware)
            .concat(similarsAPI.middleware)
            .concat(actorsAPI.middleware)
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType["dispatch"]
