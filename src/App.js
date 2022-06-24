import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './actions/users'
import { Users } from './pages'

const App = () => {
  const users = useSelector(state => state.users)
  const isLoading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(fetchUsers())
  }
  useEffect(() => {
    console.log('Mounting...')

    return () => {
      console.log('Unmounting...')
    }
  }, [])

  return <Users />
}

export default App
