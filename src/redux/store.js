import { applyMiddleware, createStore } from "redux"
import catalogReducer from "./catalogReducer"
import thunk from 'redux-thunk'

const store = createStore(catalogReducer, applyMiddleware(thunk))

export default store