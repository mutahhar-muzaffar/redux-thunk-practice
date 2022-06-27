import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../reducers/loading'
import usersReducer from '../reducers/users'

export default configureStore({
  reducer: {
    loader: loadingReducer,
    users: usersReducer
  }
})
