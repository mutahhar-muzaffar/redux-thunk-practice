import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styled.components'
import { fetchUsers } from '../../actions/users'

const Users = () => {
  const users = useSelector(state => state.users)
  const isLoading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(fetchUsers())
  }
  return (
    <Styled.Container>
      <Styled.Title>Dummy Users</Styled.Title>
      <Styled.ButtonWrapper>
        <Styled.LoadButton onClick={handleClick}>Load Users</Styled.LoadButton>
      </Styled.ButtonWrapper>
      <Styled.UsersContainer>
        {isLoading && <Styled.LoadingText>Loading</Styled.LoadingText>}
        {!isLoading &&
          users &&
          users.map(user => (
            <Styled.UserCard>
              <Styled.UserTitle>{user.username}</Styled.UserTitle>
              <p>Age: {user.age}</p>
            </Styled.UserCard>
          ))}
      </Styled.UsersContainer>
    </Styled.Container>
  )
}

export default Users
