import API from '../api'
import { startLoading, stopLoading } from './loading'
export const FETCH_USERS = 'LOAD_USERS'

const addUsers = users => ({
  type: FETCH_USERS,
  payload: users
})

export const fetchUsers = () => async dispatch => {
  dispatch(startLoading())
  const resp = await API.get('/users')
  console.log(resp.data.users)
  dispatch(addUsers(resp.data.users))
  dispatch(stopLoading())
}
