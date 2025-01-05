import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
//import reducers
import state from './photography_reducer'

const reducer = combineReducers({state})

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware,createLogger({collapsed:true}))
)

const store = createStore(reducer, middleware)

export default store