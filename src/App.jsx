import './App.css'
import input from '../public/img/input.svg'
import log_in_button from '../public/img/bx-right-arrow-alt.svg'
import logo from '../public/img/RASIEEE.png'
import Registro from './Registro.jsx'
import LogIn from './LogIn.jsx'
import AdminUsers from './AdminUsers.jsx'
import Editar from './Edicion.jsx'
import { Route } from 'react-router'
import { Routes } from 'react-router'

const Home = () => <h1>Home</h1>

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/adminusers' element={<AdminUsers/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      <Route path='/Editar' element={<Editar/>}></Route>
    </Routes>
    </>
  )
}

export default App
