import { useEffect } from 'react'
import Header from '../../components/Header'
import { LoginInput } from '../Login/styles'
import { DarkButton } from './../../components/OptionHome/styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormContainer, PlanetSelector } from './styles'

import api from './../../services/client'

interface ITrip {
  name: string
  description: string
  date: string
  planet: string
  durationInDays: number
}

export default function CreateTrip() {
  const { register, handleSubmit, watch } = useForm<ITrip>()

  const token = localStorage.getItem('token')
  useEffect(() => {
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
  }, [token])

  const onSubmit: SubmitHandler<ITrip> = () => {
    api
      .post(
        '/trips',
        {
          name: watch('name'),
          description: watch('description'),
          date: watch('date'),
          planet: watch('planet'),
          durationInDays: watch('durationInDays'),
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
          toastId: 'SuccessLogin',
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
          toastId: 'ErrorLogin',
        })
      })
  }

  const CurrentDateWithoutHours = new Date().toISOString().split('T')[0]

  const PlanetList = [
    'Mercurio',
    'Venus',
    'Terra',
    'Marte',
    'Jupiter',
    'Saturno',
    'Urano',
    'Netuno',
  ]

  return (
    <>
      <Header />
      <ToastContainer />
      {token !== null && (
        <div>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h2>Criar Viagem</h2>
            <LoginInput
              {...register('name', { required: true, minLength: 5 })}
              maxLength={40}
              placeholder='Nome'
            />

            <PlanetSelector {...register('planet', { required: true })}>
              {PlanetList.map((planet) => (
                <option key={planet.toLowerCase()} value={planet.toLowerCase()}>
                  {planet}
                </option>
              ))}
            </PlanetSelector>

            <LoginInput
              {...register('date', { required: true, minLength: 5 })}
              placeholder='Data'
              type={'date'}
              min={CurrentDateWithoutHours}
            />
            <LoginInput
              {...register('description', { required: true, minLength: 30 })}
              placeholder='Descrição'
            />
            <LoginInput
              {...register('durationInDays', {
                required: true,
              })}
              type={'number'}
              min={50}
              placeholder='Duração em dias (Mínimo 50 dias)'
            />
            <DarkButton
              type='submit'
              style={{
                width: 'auto',
                padding: '10px',
                paddingLeft: '120px',
                paddingRight: '120px',
              }}
            >
              Criar!
            </DarkButton>
          </FormContainer>
        </div>
      )}
    </>
  )
}
