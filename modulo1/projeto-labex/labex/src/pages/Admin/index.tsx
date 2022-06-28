import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// client
import api from '../../services/client'
// components
import Header from '../../components/Header'
import TripCard from './../../components/TripCard/index'
// exported types
import { ITrip } from './../Trips/index'
// animations
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DarkButton } from '../../components/OptionHome/styles'
import { Container } from 'react-bootstrap'

function Admin() {
  const [trips, setTrips] = useState<ITrip[]>([])

  useEffect(() => {
    api.get('trips').then((response) => {
      setTrips(response.data.trips)
    })
  }, [])

  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        <h3>Administrativo</h3>

        <Link to='/admin/create'>
          <DarkButton>Cadastrar Viagem</DarkButton>
        </Link>
      </Container>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {trips.map((trip) => (
          <TripCard
            id={trip.id}
            title={trip.name}
            description={trip.description}
            planet={trip.planet}
            durationInDays={trip.durationInDays}
            date={trip.date}
            mode={'Admin'}
          />
        ))}
      </div>
    </>
  )
}

export default Admin
