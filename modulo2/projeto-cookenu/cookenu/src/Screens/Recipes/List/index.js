import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../../Services/Client'
import { Container, FlatList } from './styles'
import { Typography } from '@mui/material'
import { useState } from 'react'
import MediaCard from './../../../Components/RecipeCard/index'
import { Link } from 'react-router-dom'

export default function List() {
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }

    Api.get('/recipe/feed', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setRecipes(response.data)
    })
  }, [navigate])

  return (
    <Container>
      <Typography style={{ marginTop: '2%' }} variant='h4' component='div'>
        Lista de Receitas
      </Typography>
      <FlatList>
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.recipe_id}`}>
            <MediaCard key={recipe.recipe_id} {...recipe} />
          </Link>
        ))}
      </FlatList>
    </Container>
  )
}
