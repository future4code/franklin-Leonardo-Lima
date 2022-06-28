import Header from '../../components/Header'
import OptionHome from '../../components/OptionHome'
import { Container, Options } from './styles'

function Home() {
  return (
    <Container>
      <Header />
      <Options>
        <OptionHome />
      </Options>
    </Container>
  )
}

export default Home
