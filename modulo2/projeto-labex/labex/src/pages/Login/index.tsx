import Header from '../../components/Header'
import {
  LoginContainer,
  LoginInput,
  LoginTitle,
  FormContainer,
  ErrorText,
} from './styles'
import { HomeButton } from '../../components/OptionHome/styles'
import { IoMdLogIn } from 'react-icons/io'

import api from '../../services/client'
import { useForm, SubmitHandler } from 'react-hook-form'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = () => {
    const email = watch('email')
    const password = watch('password')
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
      })
  }

  return (
    <>
      <Header />
      <ToastContainer />

      <LoginContainer>
        <LoginTitle>Administrativo</LoginTitle>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <LoginInput
            {...register('email', { required: true })}
            placeholder='Email'
            type={'email'}
          />
          {errors.email && <ErrorText>O campo email é necessário.</ErrorText>}
          <LoginInput
            {...register('password', { required: true })}
            placeholder='Senha'
            type={'password'}
          />
          {errors.password && (
            <ErrorText>O campo senha é necessário.</ErrorText>
          )}
          <HomeButton type='submit'>
            <IoMdLogIn size={30} />
            Logar
          </HomeButton>
        </FormContainer>
      </LoginContainer>
    </>
  )
}
