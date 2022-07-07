import { DefaultContainer, FormContainer } from './styles'
import useForm from '../../Hooks/useForm'
import { Typography } from '@mui/material'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Api } from './../../Services/Client'
import { useState } from 'react'

export default function Signup() {
  const [form, change, clear] = useForm({ name: '', email: '', password: '' })

  const [status, setStatus] = useState('')

  const onSubmitForm = async (event) => {
    event.preventDefault()
    Api.post('/user/signup', form)
      .then((response) => {
        setStatus('Cadastro realizado com sucesso!')
        clear()
      })
      .catch((error) => {
        setStatus('Erro ao realizar o cadastro!')
      })
  }

  return (
    <DefaultContainer>
      <Typography variant='h4' align='center' color='secondary'>
        Cadastro
      </Typography>
      <FormContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name='name'
            label='Nome'
            type={'text'}
            value={form.name}
            onChange={change}
            variant='outlined'
            color='secondary'
            margin='normal'
            fullWidth
          />
          <TextField
            name='email'
            label='Email'
            type={'email'}
            value={form.email}
            onChange={change}
            variant='outlined'
            color='secondary'
            margin='normal'
            fullWidth
          />
          <TextField
            name='password'
            type={'password'}
            label='Senha'
            value={form.password}
            onChange={change}
            variant='outlined'
            color='secondary'
            margin='normal'
            fullWidth
          />
          <Button
            type='submit'
            margin='normal'
            variant='contained'
            color='secondary'
            fullWidth
          >
            Registrar
          </Button>
          <Typography
            variant='h6'
            style={{ marginTop: '1%' }}
            color='secondary'
          >
            {status}
          </Typography>
        </form>
      </FormContainer>
    </DefaultContainer>
  )
}
