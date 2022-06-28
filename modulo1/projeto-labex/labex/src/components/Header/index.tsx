import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  return (
    <Navbar variant='dark' bg='dark' expand={'md'} className='mb-3'>
      <Container fluid>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand>LaberX</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'md'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
          placement='end'
        >
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            {isLogged ? (
              <>
                <Nav.Link>
                  <Link
                    to='/trips'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Público
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='/admin'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Admin
                  </Link>
                </Nav.Link>

                <Nav.Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('email')
                    window.location.reload()
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='/trips'>
                    Viagens
                </Nav.Link>
                <Nav.Link as={Link} to='/admin'>
                    Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
