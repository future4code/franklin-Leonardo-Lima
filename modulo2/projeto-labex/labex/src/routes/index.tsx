import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// public section
import Home from '../pages/Home'
import Trips from '../pages/Trips'

// private section
import Admin from '../pages/Admin'
import Apply from '../pages/ApplicationForm'
import Login from '../pages/Login'
import CreateTrip from '../pages/CreateTrip'
import Details from '../pages/TripDetails'

function RoutesApp() {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/apply/:id' element={<Apply />} />
        <Route
          path='admin'
          element={isLogged === true ? <Admin /> : <Login />}
        />
        <Route path='admin/create' element={<CreateTrip />} />
        <Route path='admin/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
