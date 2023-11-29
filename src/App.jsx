import './App.css'
import input from '../public/img/input.svg'
import log_in_button from '../public/img/bx-right-arrow-alt.svg'
import logo from '../public/img/RASIEEE.png'
import Registro from './Registro.jsx'
import LogIn from './LogIn.jsx'
import AdminUsers from './AdminUsers.jsx'
import Inicio from './Index.jsx'
import Editar from './Edicion.jsx'
import Proyectos from './Proyectos.jsx'
import { Route } from 'react-router'
import { Routes } from 'react-router'

const Home = () => <h1>Home</h1>
 
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/adminusers' element={<AdminUsers/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      <Route path='/Editar' element={<Editar/>}></Route>
      <Route path='/Proyectos' element={<Proyectos/>}></Route>
    </Routes>
    </>
  )
}

export default App
