import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Api } from '../../../Services/Client'
import { useState } from 'react'
import { Container, RecipeContainer } from './styles'
import { Typography } from '@mui/material'

export default function Detail() {
  const params = useParams()
  const id = params.id

  const [recipe, setRecipe] = useState([])

  console.log(recipe)
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }

    Api.get(`/recipe/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setRecipe(response.data[0])
    })
  }, [navigate, id])
  return (
    <Container>
      <RecipeContainer>
        <Typography style={{ marginTop: '2%' }} variant='h3' component='div'>
          {recipe.title}
        </Typography>
        <Typography variant='h5' component='div'>
          Por: {recipe.userName}
        </Typography>
        {/* image */}
        <img
          style={{ marginTop: '2%' }}
          alt=''
          src={recipe.image}
          width='500'
        />
        <Typography style={{ marginTop: '2%' }} variant='h5' component='div'>
          {recipe.description}
        </Typography>
      </RecipeContainer>
    </Container>
  )
}
