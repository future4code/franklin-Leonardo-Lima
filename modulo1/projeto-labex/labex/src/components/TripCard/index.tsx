import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HomeButton } from '../../components/OptionHome/styles'
import api from './../../services/client'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
interface IProps {
  id: string
  title: string
  description: string
  planet: string
  durationInDays: number
  date: string
  mode: 'Admin' | 'User'
}

const TripCard = (props: IProps) => {
  const [visibility, setVisibility] = useState(true)

  const deleteTrip = () => {
    setVisibility(false)
    api
      .delete(`trips/${props.id}`, {
        headers: {
          'Content-Type': 'application/json',
          auth: localStorage.getItem('token') || '',
        },
      })
      .then(() => {
        toast.success('🆗 Viagem deletada com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .catch(() => {
        toast.error('😰 Erro ao deletar viagem!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          window.location.reload()
        }, 5000)
      })
  }

  return (
    <>
      {visibility && (
        <Card
          style={{
            width: '20rem',
            margin: '5px',
            minWidth: '14rem',
            height: '18rem',
            border: '1px solid #ebebeb',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px #ebebeb',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem',
          }}
        >
          <ToastContainer />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>
              Duração: <strong>{props.durationInDays} dias</strong>
              <br />
              Data: <strong>{props.date}</strong>
            </Card.Text>
          </Card.Body>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {props.mode === 'Admin' ? (
              <>
                <Link to={`details/${props.id}`}>
                  <HomeButton>Ver Detalhes</HomeButton>
                </Link>
                <HomeButton onClick={deleteTrip}>Deletar</HomeButton>
              </>
            ) : (
              <Link to={`/apply/${props.id}`}>
                <HomeButton>Quero ir a {props.planet}!</HomeButton>
              </Link>
            )}
          </div>
        </Card>
      )}
    </>
  )
}

export default TripCard
