import { combineReducers } from 'redux'
import loadingReducer from './loading'
import userReducer from './users'

export default combineReducers({
  users: userReducer,
  loading: loadingReducer
})
