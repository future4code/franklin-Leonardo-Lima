import styled from 'styled-components'

export const TripDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin-bottom: 0px;
  }
`

export const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px;
  justify-content: center;
  background-color: #fff;
`
