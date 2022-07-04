import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { goLogin, goRecipes, goRecipesAdd } from './../../Routes/coord'
import { useNavigate } from 'react-router-dom'

export default function MenuAppBar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            Cookenu
          </Typography>
          <div>
            {!token ? (
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
                onClick={() => {
                  goLogin(navigate)
                }}
              >
                <Typography variant='h5' component='div' styled>
                  Login
                </Typography>
              </IconButton>
            ) : (
              <>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={() => {
                    goRecipes(navigate)
                  }}
                >
                  <Typography variant='h5' component='div' styled>
                    Receitas
                  </Typography>
                </IconButton>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={() => {
                    goRecipesAdd(navigate)
                  }}
                >
                  <Typography variant='h5' component='div' styled>
                    Adicionar
                  </Typography>
                </IconButton>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={() => {
                    localStorage.removeItem('token')
                    goLogin(navigate)
                  }}
                >
                  <Typography variant='h5' component='div' styled>
                    Logout
                  </Typography>
                </IconButton>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
