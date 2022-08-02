import Routes from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
