import React, { useEffect } from 'react'
import { Users } from './pages'

const App = () => {
  useEffect(() => {
    console.log('Mounting...')

    return () => {
      console.log('Unmounting...')
    }
  }, [])

  return <Users />
}

export default App
