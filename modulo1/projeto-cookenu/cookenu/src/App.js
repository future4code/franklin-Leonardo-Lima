import Router from './Routes/Routes'
import { ThemeProvider } from '@mui/material'
import { CookenuTheme } from './Themes/Theme'
import './App.css'

export default function App() {
  return (
    <ThemeProvider theme={CookenuTheme}>
      <Router />
    </ThemeProvider>
  )
}
