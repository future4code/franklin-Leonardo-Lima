import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const DarkButton = styled.button`
  background-color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`
