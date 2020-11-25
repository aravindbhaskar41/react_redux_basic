

import {combineReducers, createStore} from "redux";


import {simpleCounterReducer} from "./simpleCounter/reducer";
import {customCounterReducer} from "./customCounter/reducer"

const reducers=combineReducers(
    {
        simpleCounterReducer,
        customCounterReducer
    }
)

const store=createStore(reducers);

export default store;