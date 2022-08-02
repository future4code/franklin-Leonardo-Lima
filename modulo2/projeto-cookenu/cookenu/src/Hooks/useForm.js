import { useState } from 'react'

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const clear = () => {
    setForm(initialValues)
  }

  return [form, handleInputChange, clear]
}

export default useForm
