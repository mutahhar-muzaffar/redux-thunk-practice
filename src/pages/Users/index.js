import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styled.components'
import { startLoading, stopLoading } from '../../reducers/loading'
import { addUsers } from '../../reducers/users'
import API from '../../api'

const Users = () => {
  const { users } = useSelector(state => state.users)
  const { loading: isLoading } = useSelector(state => state.loader)
  const dispatch = useDispatch()
  const handleClick = () => {
    console.log(users)
  }

  useEffect(() => {
    const fetchUsers = () => {
      dispatch(startLoading())
      API.get('/users')
        .then(resp => {
          dispatch(addUsers(resp.data.users))
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          dispatch(stopLoading())
        })
    }
    fetchUsers()
  }, [dispatch])

  return (
    <Styled.Container>
      <Styled.Title>Dummy Users</Styled.Title>
      <Styled.ButtonWrapper>
        <Styled.LoadButton onClick={handleClick}>Log Users</Styled.LoadButton>
      </Styled.ButtonWrapper>
      <Styled.UsersContainer>
        {isLoading && <Styled.LoadingText>Loading</Styled.LoadingText>}
        {!isLoading &&
          users &&
          users.map(user => (
            <Styled.UserCard key={user.id}>
              <Styled.UserTitle>{user.username}</Styled.UserTitle>
              <p>Age: {user.age}</p>
            </Styled.UserCard>
          ))}
      </Styled.UsersContainer>
    </Styled.Container>
  )
}

export default Users
