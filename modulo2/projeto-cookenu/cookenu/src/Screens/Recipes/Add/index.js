import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Typography } from '@mui/material'
import { Container, FormContainer } from './styles'
import { Button } from '@mui/material'
import useForm from '../../../Hooks/useForm'
import { Api } from '../../../Services/Client'
import { useState } from 'react'
export default function Add() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('')

  const onSubmitForm = (event) => {
    event.preventDefault()
    Api.post('/recipe', form, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })

      .then((response) => {
        clear()
        navigate('/recipes')
      })
      .catch((error) => {
        clear()
        setStatus('Erro ao cadastrar receita')
      })
  }

  const [form, change, clear] = useForm({
    title: '',
    description: '',
    image: '',
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  }, [navigate])

  return (
    <Container>
      <FormContainer>
        <form onSubmit={onSubmitForm}>
          <Typography variant='h5' component='div'>
            Adicionar Receita
          </Typography>
          <TextField
            name='title'
            label='Título'
            variant='outlined'
            type={'text'}
            margin='normal'
            fullWidth
            value={form.title}
            onChange={change}
          />
          <TextField
            name='description'
            label='Descrição'
            variant='outlined'
            type={'text'}
            margin='normal'
            value={form.description}
            onChange={change}
            fullWidth
          />
          <TextField
            name='image'
            label='Link da imagem'
            variant='outlined'
            type={'text'}
            margin='normal'
            value={form.image}
            onChange={change}
            fullWidth
          />
          <Button variant='contained' color='primary' fullWidth type='submit'>
            Adicionar
          </Button>
        </form>
      </FormContainer>
      <Typography
        style={{ marginTop: '1%' }}
        variant='h5'
        component='div'
        color='error'
      >
        {status}
      </Typography>
    </Container>
  )
}
