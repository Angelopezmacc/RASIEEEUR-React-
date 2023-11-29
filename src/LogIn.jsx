import './App.css'
import input from '../public/img/input.svg'
import log_in_button from '../public/img/bx-right-arrow-alt.svg'
import left_icon from '../public/img/bx-left-arrow-alt.svg'
import logo from '../public/img/RASIEEE.png'
import Swal from 'sweetalert2'
import { useState } from 'react'
function LogIn() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const alertau = () => {
      Swal.fire({
        title: "Usuario Inexistente",
        text: "la información de usuario no existe",
        icon: "error",
        confirmButtonColor: "#DF3333",
        confirmButtonText: "Salir",
      });}
    const validar = () =>{
      Swal.fire({
        title: "Debes llenar todos los campos",
        icon: "error",
        confirmButtonColor: "#DF3333",
        confirmButtonText: "Salir",
      });
    }
    const volver = () =>{
      window.location.href = '/';
    }
    const entrar = () =>{
      window.location.href = '/Proyectos';
    }

  return (
    <>
    <button className='return_button' onClick={volver}>
        <img src={left_icon} alt="" />
        <p>Volver</p>
    </button>
    <div className="contenedor_flex">
        <div className="columna1">
          <h2>Bienvenido al equipo mas pro de Colombia</h2>
          <img src={logo} alt="" className='logo_grande'/>
        </div>
        <div className="columna2">
          <div className='f_log_in'>
            <h1>Log in</h1>
            <form action="" onSubmit={(dato) =>{
              dato.preventDefault()
              setUsuario(dato.target.usuario.value)
              setContrasena(dato.target.contrasena.value) 
              if(usuario != "admin" && contrasena != "1234") {alertau()}
              if(usuario == "admin" && contrasena == "1234") {entrar()}
              if(usuario == "" || contrasena == "") {validar()}
            }}>
              <div className="campo">
                  <input type="text" name="usuario" id="" required / >
                  <label htmlFor="" name="usuario" className='label'><span className='texto_input'>Usuario</span></label>
                  <img src={input} className='input_svg' alt="" />
              </div>

              <div className="campo">
                  <input type="password" name="contrasena" id="" required/>
                  <label htmlFor="" className='label'><span className='texto_input'>Contraseña</span></label>
                  <img src={input} className='input_svg' alt="" />
              </div>
              <div className='log_in_boton'>
              <a href="../add_user.html" className='olvide_contraseña'>Olvide mi contraseña</a>
                <button type='submit'>
                  <img src={log_in_button} alt="" />
                  <p>Entrar</p>
                </button>
              </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}
export default LogIn
