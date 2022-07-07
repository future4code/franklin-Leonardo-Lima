import Header from '../../components/Header'
import api from './../../services/client'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ITrip } from '../Trips'
import { TripDetailsCard, TripInfo } from './styles'
import CandidateCard from '../../components/CandidatesCard'
import { Center } from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface ICandidate {
  id: string
  applicationText: string
  profession: string
  age: number
  name: string
  country: string
}

interface IDetails extends ITrip {
  approved: ICandidate[]
  candidates: ICandidate[]
}

export default function Details() {
  const { id } = useParams()
  const [tripKey, setTripKey] = useState('')

  const [trip, setTrip] = useState<IDetails>({
    approved: [],
    candidates: [],
    id: '',
    name: '',
    planet: '',
    durationInDays: 0,
    date: '',
    description: '',
  })

  const token = localStorage.getItem('token')
  if (token === null) {
    toast.error(`Você precisa estar logado para visualizar essa página!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      pauseOnHover: false,
      toastId: 'ErrorLogin',
    })
  }

  useEffect(() => {
    api
      .get(`/trip/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          auth: localStorage.getItem('token') || '',
        },
      })
      .then((res) => {
        setTrip(res.data.trip)
        setTripKey(res.data.trip.id)
      })
  }, [id, trip])

  return (
    <div>
      <Header />
      <ToastContainer />
      {token !== null && (
        <div>
          <TripDetailsCard>
            <TripInfo>
              <h1>{trip.name}</h1>
              <h3>{trip.description}</h3>
              <h3>
                Data: <strong>{trip.date}</strong>
              </h3>
              <h3>
                Duração: <strong>{trip.durationInDays} dias</strong>
              </h3>
              <h3>
                Planeta: <strong>{trip.planet}</strong>
              </h3>
              <h3>
                Candidatos Aprovados: <strong>{trip.approved.length}</strong>
              </h3>
              <ul>
                {trip.approved.map((candidate) => (
                  <li key={candidate.id}>
                    <strong>{candidate.name}</strong>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              ></div>
            </TripInfo>
          </TripDetailsCard>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '-40px',
            }}
          >
            <h2>
              Candidatos Pendentes: <strong>{trip.candidates.length}</strong>
            </h2>
          </div>
          <Center>
            {trip.candidates.map((candidate) => {
              return (
                <CandidateCard
                  key={candidate.id}
                  name={candidate.name}
                  id={candidate.id}
                  applicationText={candidate.applicationText}
                  profession={candidate.profession}
                  age={candidate.age}
                  country={candidate.country}
                  tripKey={tripKey}
                />
              )
            })}
          </Center>
        </div>
      )}
    </div>
  )
}
