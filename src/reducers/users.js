import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../api'

const initialState = {
  users: [],
  loading: false
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const resp = await API.get('/users')
  return resp.data.users
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
    })
  }
})

export default userSlice.reducer
