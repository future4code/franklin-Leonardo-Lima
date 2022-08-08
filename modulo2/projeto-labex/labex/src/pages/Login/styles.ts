import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const ErrorText = styled.span`
  color: red;
  margin-bottom: 10px;
`
export const LoginTitle = styled.h1`
  font-size: 30px;
  color: black;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const LoginInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid black;
  padding: 0 10px;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
  &:hover {
    background-color: #f7f7f7;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 30px;
    font-size: 12px;
  }
`
