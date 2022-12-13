import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./reducer"

const rootReducer = combineReducers({
    reducer: reducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))