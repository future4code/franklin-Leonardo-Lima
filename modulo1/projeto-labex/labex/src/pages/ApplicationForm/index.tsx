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

interface ICountry {
  ordem: number
  nome: string
  sigla2: string
  sigla3: string
  codigo: string
}

export default function Apply() {
  const { id } = useParams()

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [profession, setProfession] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  const options = Countries.map((country: ICountry) => {
    return { label: country.nome, value: country.sigla2 }
  })

  const applyToTrip = () => {
    toast.info('Cadastrando!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    })
    const data = JSON.stringify({
      name: name,
      age: age,
      applicationText: text,
      profession: profession,
      country: country,
    })

    api
      .post(`/trips/${id}/apply`, data)
      .then((res) => {
        toast.success('🆗 Cadastrado com sucesso!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        })

        setName('')
        setAge('')
        setText('')
        setProfession('')
        setCountry('')
        setDisabled(true)

        setInterval(() => {
          window.location.href = '/trips'
        }, 3000)
      })
      .catch((err) => {
        toast.error('🚫 Erro ao cadastrar! Revise seus dados.', {
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
    <div>
      <Header />
      <ToastContainer />
      <LoginContainer>
        <LoginTitle> Cadastro para Viagem </LoginTitle>
        <LoginInput
          onChange={(event) => {
            setName(event?.target.value)
          }}
          placeholder='Nome Completo'
        />
        <LoginInput
          onChange={(event) => {
            setAge(event?.target.value)
          }}
          placeholder='Idade'
        />
        <LoginInput
          onChange={(event) => {
            setText(event?.target.value)
          }}
          placeholder='Texto de Candidatura'
        />
        <LoginInput
          onChange={(event) => {
            setProfession(event?.target.value)
          }}
          placeholder='Profissão'
        />
        <Select
          placeholder='País'
          onChange={(event) => {
            setCountry(event?.label || '')
          }}
          options={options}
        />

        <DarkButton
          disabled={disabled}
          onClick={() => {
            applyToTrip()
          }}
        >
          Cadastrar
        </DarkButton>
      </LoginContainer>
    </div>
  )
}
