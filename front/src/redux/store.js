import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from  'redux-thunk'
import {createLogger} from 'redux-logger'
import combineReducer from '../redux/reducers/index'

export default createStore(
    combineReducer,
    (applyMiddleware(createLogger(), thunkMiddleware))
);