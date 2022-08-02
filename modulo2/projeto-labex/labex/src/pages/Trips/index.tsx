import Header from '../../components/Header'
import TripCard from '../../components/TripCard'
import { useState, useEffect } from 'react'
import api from './../../services/client'

export interface ITrip {
  id: string
  name: string
  description: string
  planet: string
  durationInDays: number
  date: string
}

function Trips() {
  const [trips, setTrips] = useState<ITrip[]>([])

  useEffect(() => {
    api.get('trips').then((response) => {
      setTrips(response.data.trips)
    })
  }, [])

  return (
    <>
      <Header />
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {trips.map((trip, index) => (
          <TripCard
            key={index}
            id={trip.id}
            title={trip.name}
            description={trip.description}
            planet={trip.planet}
            durationInDays={trip.durationInDays}
            date={trip.date}
            mode={'User'}
          />
        ))}
      </div>
    </>
  )
}

export default Trips
