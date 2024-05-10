import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Prodid from './pages/Prodid'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import NavBar from './components/share/NavBar'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App () {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<Prodid />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App