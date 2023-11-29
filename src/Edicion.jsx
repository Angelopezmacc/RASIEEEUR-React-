import './index.css'
import input from '../public/img/input.svg'
import edit_icon from '../public/img/bxs-edit.svg'
import left_icon from '../public/img/bx-left-arrow-alt.svg'
import Swal from 'sweetalert2'
import { useState } from 'react'


function Edicion() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [programa, setPrograma] = useState('');
    const [contraseña, setContraseña] = useState('');

    const alerta = () =>{
        Swal.fire({
            title: "Estas seguro?",
            text: "la información que proporcionaste no se guardara",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#8E8E8E",
            confirmButtonText: "Salir",
            cancelButtonText: "Quedarme",
            preConfirm: () =>{
                window.location.href = '/AdminUsers';
            }
          });
    }  
    return (
    <>
    <button className='return_button' onClick={alerta}>
        <img src={left_icon} alt="" />
        <p>Regresar</p>
    </button>
    <div className='registro_contenedor'>
    <h1>Edición de usuarios</h1>
    <form action="" className='formulario_registro' onSubmit={dato =>{
        dato.preventDefault()
        setNombre(dato.target.nombre.value)
        setCorreo(dato.target.correo.value)  
        setTelefono(dato.target.telefono.value)  
        setPrograma(dato.target.programa.value)  
        setContraseña(dato.target.contraseña.value)    
    }}>
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
                    <button className="boton_registro" type='submit'>
                        <p>Editar</p>
                        <img src={edit_icon} alt=""/>
                    </button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Edicion