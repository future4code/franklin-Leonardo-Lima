import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Select from 'react-select'
import { LoginContainer, LoginInput, LoginTitle } from '../Login/styles'

import Countries from './Countries.json'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import api from './../../services/client'
import { DarkButton } from './../../components/OptionHome/styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormContainer } from './styles'

interface ICountry {
  ordem: number
  nome: string
  sigla2: string
  sigla3: string
  codigo: string
}

interface IApplicationForm {
  name: string
  age: number
  applicationText: string
  profession: string
  country: string
  trip: string
}

export default function Apply() {
  const { register, handleSubmit, watch } = useForm<IApplicationForm>()

  const { id } = useParams()
  const [disabled, setDisabled] = useState<boolean>(false)
  const [selectedCountry, setSelectedCountry] = useState<any>()

  const options = Countries.map((country: ICountry) => {
    return { label: country.nome, value: country.sigla2 }
  })

  const onSubmit: SubmitHandler<IApplicationForm> = () => {
    toast.info('Cadastrando!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      toastId: 'Apply',
    })

    const data = JSON.stringify({
      name: watch('name'),
      age: watch('age'),
      applicationText: watch('applicationText'),
      profession: watch('profession'),
      country: selectedCountry,
    })

    api
      .post(`/trips/${id}/apply`, data)
      .then(() => {
        toast.success('🆗 Cadastrado com sucesso!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          toastId: 'Apply',
        })

        setDisabled(true)

        setInterval(() => {
          window.location.href = '/trips'
        }, 3000)
      })
      .catch(() => {
        toast.error('🚫 Erro ao cadastrar! Revise seus dados.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          toastId: 'ErrorApply',
        })
      })
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <LoginContainer>
          <LoginTitle> Cadastro para Viagem </LoginTitle>
          <LoginInput
            type={'text'}
            {...register('name', { required: true, minLength: 3 })}
            placeholder='Nome Completo'
          />
          <LoginInput
            type={'number'}
            {...register('age', { required: true })}
            placeholder='Idade (min. 18 anos)'
            min={18}
          />
          <LoginInput
            type={'text'}
            {...register('applicationText', { required: true, minLength: 30 })}
            placeholder='Texto de Candidatura (min 30 caracteres)'
          />
          <LoginInput
            type={'text'}
            {...register('profession', { required: true, minLength: 10 })}
            placeholder='Profissão'
          />
          <Select
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: '#fff',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 4,
                borderStyle: 'solid',
                boxShadow: 'none',
                width: 300,
                height: 50,
                '&:hover': {
                  background: '#fff',
                },
                '@media (max-width: 768px)': {
                  width: 200,
                  height: 30,
                  fontSize: 12,
                },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: '#fff',
                borderColor: '#fff',
                borderWidth: 1,
                borderRadius: 4,
                borderStyle: 'solid',
                boxShadow: 'none',
              }),
            }}
            placeholder='País'
            options={options}
            onChange={(event) => {
              setSelectedCountry(event?.label || '')
            }}
          />

          <DarkButton disabled={disabled} type={'submit'}>
            {disabled ? 'Cadastrar' : 'Preencha os Campos'}
          </DarkButton>
        </LoginContainer>
      </FormContainer>
    </div>
  )
}
