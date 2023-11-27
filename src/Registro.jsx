import './index.css'
import input from '../public/img/input.svg'
import Btn from './Botonenviar.jsx'

function Registro() {
  return (
    <>
    <div className='registro_contenedor'>
    <h1>Registro de usuarios</h1>
    <form action="" className='formulario_registro'>
        <div className="f_registro_p1">
                <div className="campo">
                    <input type="text" name="" id="" required / >
                    <label htmlFor="" className='label'><span className='texto_input'>Nombre</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div className="campo">
                    <input type="email" name="" id="" required/>
                    <label htmlFor="" className='label'><span className='texto_input'>Correo</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div className="campo">
                    <input type="number" name="" id="" required/>
                    <label htmlFor="" className='label'><span className='texto_input'>Telefono</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>
            </div>

            <div className="f_registro_p2">
                <div className="campo">
                    <input type="text" name="" id="" required / >
                    <label htmlFor="" className='label'><span className='texto_input'>Programa</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div className="campo">
                    <input type="password" name="" id="" required/>
                    <label htmlFor="" className='label'><span className='texto_input'>Contraseña</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <Btn></Btn>
            </div>
        </form>
    </div>
    </>
  )
}

export default Registro