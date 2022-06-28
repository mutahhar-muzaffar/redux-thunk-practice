import API from '../api'
export const FETCH_USERS = 'LOAD_USERS'

const addUsers = users => ({
  type: FETCH_USERS,
  payload: users
})

export const fetchUsers = () => async dispatch => {
  const resp = await API.get('/users')
  console.log(resp.data.users)
  dispatch(addUsers(resp.data.users))
}
