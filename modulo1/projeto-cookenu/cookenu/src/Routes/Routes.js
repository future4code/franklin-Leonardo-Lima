import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Screens/Login'
import Signup from './../Screens/Signup/index'
import List from './../Screens/Recipes/List/index'
import Add from '../Screens/Recipes/Add'
import Detail from '../Screens/Recipes/Detail'
import Header from '../Components/Header'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/recipes' element={<List />} />
        <Route path='/recipes/add' element={<Add />} />
        <Route path='/recipe/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
