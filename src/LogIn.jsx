import './App.css'
import input from '../public/img/input.svg'
import log_in_button from '../public/img/bx-right-arrow-alt.svg'
import logo from '../public/img/RASIEEE.png'

function LogIn() {
  return (
    <>
    <div className="contenedor_flex">
        <div className="columna1">
          <h2>Bienvenido al equipo mas pro de Colombia</h2>
          <img src={logo} alt="" className='logo_grande'/>
        </div>
        <div className="columna2">
          <div className='f_log_in'>
            <h1>Log in</h1>
            <form action="">
              <div className="campo">
                  <input type="text" name="" id="" required / >
                  <label htmlFor="" className='label'><span className='texto_input'>Usuario</span></label>
                  <img src={input} className='input_svg' alt="" />
              </div>

              <div className="campo">
                  <input type="password" name="" id="" required/>
                  <label htmlFor="" className='label'><span className='texto_input'>Contraseña</span></label>
                  <img src={input} className='input_svg' alt="" />
              </div>
            </form>
            <div className='botones_log'>
              <a href="../add_user.html" className='olvide_contraseña'>Olvide mi contraseña</a>
              <div className='log_in_boton'>
                <a href="/AdminUsers">
                  <img src={log_in_button} alt="" />
                  <p>Entrar</p>
                </a>
              </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default LogIn
