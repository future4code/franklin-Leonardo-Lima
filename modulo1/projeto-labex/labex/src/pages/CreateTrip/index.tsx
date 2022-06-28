import Header from '../../components/Header'
import { LoginInput } from '../Login/styles'
import { DarkButton } from './../../components/OptionHome/styles'

import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import api from './../../services/client'

interface ITrip {
  name: string
  description: string
  date: string
  planet: string
  durationInDays: number
}

export default function CreateTrip() {
  const [trip, setTrip] = useState<ITrip>({
    name: '',
    description: '',
    date: '',
    planet: '',
    durationInDays: 0,
  })

  const tryToCreate = () => {
    api
      .post(
        '/trips',
        {
          name: trip.name,
          description: trip.description,
          date: trip.date,
          planet: trip.planet,
          durationInDays: trip.durationInDays,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token') || '',
          },
        }
      )
      .then((response) => {
        toast.success(`🎉 Viagem criada com sucesso!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          pauseOnHover: false,
        })
        setTrip({
          name: '',
          description: '',
          date: '',
          planet: '',
          durationInDays: 0,
        })
        // go to trips
        window.location.href = '/admin'
      })
      .catch((error) => {
        toast.error(`😢 Erro ao criar viagem!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          pauseOnHover: false,
        })
      })
  }

  return (
    <>
      <Header />
      <ToastContainer />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <label>Nome da Viagem</label>
        <LoginInput
          value={trip.name}
          onChange={(e) => {
            setTrip({ ...trip, name: e.target.value })
          }}
          maxLength={40}
          placeholder='Expedição ao centro de Saturno'
        />
        <label>Planeta</label>
        <LoginInput
          value={trip.planet}
          onChange={(e) => {
            setTrip({ ...trip, planet: e.target.value })
          }}
          maxLength={10}
          placeholder='Saturno'
        />
        <label>Data</label>
        <LoginInput
          value={trip.date}
          maxLength={10}
          onChange={(e) => {
            setTrip({ ...trip, date: e.target.value })
          }}
          placeholder='25/05/2020'
        />
        <label>Descrição</label>
        <LoginInput
          value={trip.description}
          onChange={(e) => {
            setTrip({ ...trip, description: e.target.value })
          }}
          placeholder='Uma viagem muito legal...'
        />
        <label>Duração em dias</label>
        <LoginInput
          value={trip.durationInDays}
          maxLength={6}
          onChange={(e) => {
            const result = e.target.value.replace(/\D/g, '')
            setTrip({ ...trip, durationInDays: Number(result) })
          }}
          placeholder='Duração em dias'
        />
        <DarkButton
          onClick={tryToCreate}
          style={{ width: 'auto', padding: '20px' }}
        >
          Criar Expedição!
        </DarkButton>
      </div>
    </>
  )
}
