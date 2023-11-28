import './index.css'
import input from '../public/img/input.svg'
import Btn from './Botonenviar.jsx'
import plus_icon from '../public/img/bx-plus-circle.svg'
import left_icon from '../public/img/bx-left-arrow-alt.svg'

function Registro() {
    const nombre_persona = document.querySelector('#name_int')
    const email_persona = document.querySelector('#email_int')
    const telefono_persona = document.querySelector('#telefono_int')
    const programa_persona = document.querySelector('#programa_int')
    const contrasena_persona = document.querySelector('#contrasena_int')
    const datos = {
        nombre: '',
        email: '',
        telefono: '',
        programa: '',
        contrasena: ''
    }       
    return (
    <>
    <button className='return_button'>
        <img src={left_icon} alt="" />
        <p>Regresar</p>
    </button>
    <div className='registro_contenedor'>
    <h1>Registro de usuarios</h1>
    <form action="" className='formulario_registro'>
        <div className="f_registro_p1">
                <div className="campo">
                    <input type="text" name="nombre" id="name_int" required />
                    <label htmlFor="" className='label'><span className='texto_input'>Nombre</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div className="campo">
                    <input type="email" name="email" id="email_int" required/>
                    <label htmlFor="" className='label'><span className='texto_input'>Correo</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div className="campo">
                    <input type="number" name="telefono" id="telefono_int" required/>
                    <label htmlFor="" className='label'><span className='texto_input'>Telefono</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>
            </div>

            <div className="f_registro_p2">
                <div className="campo">
                    <input type="text" name="programa" id="programa_int" required / >
                    <label htmlFor="" className='label'><span className='texto_input'>Programa</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div className="campo">
                    <input type="password" name="contrasena" id="contrasena_int" required/>
                    <label htmlFor="" className='label'><span className='texto_input'>Contraseña</span></label>
                    <img src={input} className='input_svg' alt="" />
                </div>

                <div>
                    <button className="boton_registro">
                        <p>Registrar</p>
                        <img src={plus_icon} alt=""/>
                    </button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Registro