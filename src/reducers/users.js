import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      console.log(action)
      state.users = action.payload
    }
  }
})

export const { addUsers } = userSlice.actions

export default userSlice.reducer
