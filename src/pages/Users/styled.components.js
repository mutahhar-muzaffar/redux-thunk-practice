import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #fff;
  padding: 1rem;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`

export const ButtonWrapper = styled.div`
  margin: 1rem auto;
  width: max-content;
`

export const LoadButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: #fff;
  background: #349eeb;
  border-radius: 0.5rem;
  margin: 0 auto;

  &:hover {
    background: #2d8acc;
  }
`

export const LoadingText = styled(Title).attrs({
  as: 'h4'
})`
  font-weight: 300;
`

export const UsersContainer = styled.div`
  min-height: 500px;
  overflow: auto;
  padding: 2rem 0;
`

export const UserCard = styled.div`
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem auto;
  background: #f58a42;
  color: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`

export const UserTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`
