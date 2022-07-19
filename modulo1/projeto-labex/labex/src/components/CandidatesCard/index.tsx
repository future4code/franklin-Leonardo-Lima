import { Card } from 'react-bootstrap'
import { useState } from 'react'
import api from '../../services/client'
import { DarkButton } from '../OptionHome/styles'
import { toast, ToastContainer } from 'react-toastify'

interface IProps {
  name: string
  profession: string
  applicationText: string
  age: number
  country: string
  id: string
  tripKey: string
}

export default function CandidateCard(props: IProps) {
  const [cacheVisibility, setCacheVisibility] = useState(true)

  const decideCandidate = (CandidateId: string, decision: boolean) => {
    api
      .put(
        `/trips/${props.tripKey}/candidates/${CandidateId}/decide`,
        {
          approve: decision,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token') || '',
          },
        }
      )
      .then((res) => {
        setCacheVisibility(!cacheVisibility)
        toast.info(
          `Candidato ${
            decision === true ? 'aprovado' : 'rejeitado'
          } com sucesso!`
        )
        // reload
        setInterval(() => {
          window.location.reload()
        }, 2000)
      })
  }

  return (
    <>
      <ToastContainer />
      {cacheVisibility && (
        <Card style={{ fontSize: 14, width: '350px', margin: '10px' }}>
          <Card.Body>
            <Card.Title>
              {props.name} - {props.age} anos
            </Card.Title>
            <Card.Text>
              Motivo: {props.applicationText}
              <br />
              Profissão: {props.profession}
              <br />
              País: {props.country}
              <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <DarkButton
              style={{ backgroundColor: 'green' }}
              onClick={() => {
                decideCandidate(props.id, true)
              }}
            >
              Aceitar
            </DarkButton>
            <DarkButton
              style={{ backgroundColor: '#8b0000' }}
              onClick={() => {
                decideCandidate(props.id, false)
              }}
            >
              Recusar
            </DarkButton>
          </Card.Footer>
        </Card>
      )}
    </>
  )
}
