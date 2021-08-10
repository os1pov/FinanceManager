import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {userReducer} from "./userReducer"
import {parameterReducer} from "./parameterReducer"
import {categoryReducer} from "./categoryReducer"
import {itemReducer} from "./itemReducer"

const rootReducer = combineReducers({
    user: userReducer,
    parameter: parameterReducer,
    category: categoryReducer,
    item: itemReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware((thunk))))