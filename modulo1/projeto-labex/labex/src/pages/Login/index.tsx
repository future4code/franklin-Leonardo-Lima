import Header from '../../components/Header'
import { LoginContainer, LoginInput, LoginTitle } from './styles'
import { HomeButton } from '../../components/OptionHome/styles'
import { IoMdLogIn } from 'react-icons/io'
import { useState } from 'react'

import api from '../../services/client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const tryToLogin = () => {
    api
      .post('/login', { email, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('email', res.data.user.email)
        window.location.reload()
      })
      .catch((err) => {
        toast.error('🚫 Usuário ou senha inválidos.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        })
        console.log(err)
      })
  }

  return (
    <>
      <Header />
      <ToastContainer />

      <LoginContainer>
        <LoginTitle>Administrativo</LoginTitle>
        <LoginInput
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder='Email'
          type={'email'}
        />
        <LoginInput
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder='Senha'
          type={'password'}
        />
        <HomeButton onClick={tryToLogin} type='submit'>
          <IoMdLogIn size={30} />
          Logar
        </HomeButton>
      </LoginContainer>
    </>
  )
}
