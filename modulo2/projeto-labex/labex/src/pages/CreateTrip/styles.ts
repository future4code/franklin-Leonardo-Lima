import styled from 'styled-components'
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  width: 100%;
`

export const PlanetSelector = styled.select`
  height: 50px;
  border-radius: 5px;
  border: 2px solid black;
  padding: 0 10px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  margin-bottom: 5px;
  width: 300px;
  &:hover {
    background-color: #f7f7f7;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 30px;
    font-size: 12px;
  }
`
