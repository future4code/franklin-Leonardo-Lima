import { TextField } from '@mui/material'
import { Button } from '@material-ui/core'
import { DefaultContainer } from './styles'
import useForm from '../../Hooks/useForm'
import { goSignup } from '../../Routes/coord'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../Services/Client'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Login() {
  const navigate = useNavigate()
  const [form, change, clear] = useForm({ email: '', password: '' })
  const [status, setStatus] = useState('')

  const onSubmitForm = async (event) => {
    event.preventDefault()

    Api.post('/user/login', form)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        navigate('/recipes')
        clear()
      })
      .catch((error) => {
        setStatus('Erro ao realizar o login!')
        clear()
      })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/recipes')
    }
  }, [navigate])

  return (
    <DefaultContainer>
      <Typography variant='h4' align='center' color='secondary'>
        Login
      </Typography>

      <form onSubmit={onSubmitForm}>
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
          Entrar
        </Button>
        <div style={{ marginTop: '2%' }}>
          <Button
            type='submit'
            variant='text'
            margin='normal'
            color='primary'
            onClick={() => goSignup(navigate)}
            fullWidth
          >
            Registrar
          </Button>
        </div>
        <Typography variant='h6' style={{ marginTop: '1%' }} color='secondary'>
          {status}
        </Typography>
      </form>
    </DefaultContainer>
  )
}
