import { Container, HomeButton } from './styles'
import { Link } from 'react-router-dom'
import { FaRocket } from 'react-icons/fa'
import { RiAdminLine } from 'react-icons/ri'

function OptionHome() {
  return (
    <Container>
      <Link to='/trips'>
        <div style={{}}>
          <HomeButton>
            <FaRocket size={100} />
            Viagens & Expedições
          </HomeButton>
        </div>
      </Link>
      <Link to='/admin'>
        <HomeButton>
          <RiAdminLine size={100} />
          Administrativo
        </HomeButton>
      </Link>
    </Container>
  )
}

export default OptionHome
