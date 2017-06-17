import itemReducer from "./itemReducer"
import { combineReducers, createStore } from "redux"

const reducers = combineReducers({
    items: itemReducer
})

export default createStore(reducers)
