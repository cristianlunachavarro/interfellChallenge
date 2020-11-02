import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import walletReducer from './wallet_reducer'

export default combineReducers({
    userReducer,
    walletReducer
})