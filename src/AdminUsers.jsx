import './App.css'

import download_icon from '../public/img/bx-download.svg'
import trash_icon from '../public/img/bx-trash.svg'
import edit_icon from '../public/img/bxs-edit.svg'
import plus_icon from '../public/img/bx-plus-circle.svg'
import left_icon from '../public/img/bx-left-arrow-alt.svg'
import Swal from 'sweetalert2'
import { useLinkClickHandler } from 'react-router-dom'

function AdminUsers() {
    const handleClick = () => {
        Swal.fire({
        title: "Seguro que quieres eliminar a este usuario",
        icon: "question"
        });
    }
    const signout = () => {
        window.location.href = '/login';
    }
    const editar = ()=>{
        window.location.href = '/editar';
    }
  return (
    <>
    <button className='return_button' onClick={signout}>
        <img src={left_icon} alt="" />
        <p>Signout</p>
    </button>
    <h1>Panel de manejo de usuarios</h1>
<table>
        <tr>
            <th>NOMBRE</th>
            <th>TELEFONO</th>
            <th>CORREO</th>
            <th>ACCIONES</th>
        </tr>

        <tr>
            <td>juan esteban</td>
            <td>3222115554</td>
            <td>juan@correo.com</td>
            <td className="no_border actions">
                <button onClick={handleClick}><img src={trash_icon} alt=""/></button>
                <button onClick={editar}><img src={edit_icon} alt=""/></button>
            </td>
        </tr>

        <tr>
            <td>nicolas</td>
            <td>332215554</td>
            <td>gallego@prueba.com</td>
            <td className="no_border actions">
                <button onClick={handleClick}><img src={trash_icon} alt=""/></button>
                <button onClick={editar}><img src={edit_icon} alt=""/></button>
            </td>
        </tr>

        <tr>
            <td>konnichiwa</td>
            <td>332215554</td>
            <td>ino@prueba.com</td>
            <td className="no_border actions">
                <button onClick={handleClick}><img src={trash_icon} alt=""/></button>
                <button onClick={editar}><img src={edit_icon} alt=""/></button>
            </td>
        </tr>
    </table>

    <div class="admin_actions">
        <button className="blue_button">
            <a href="#">
                <p>cargar todos</p>
                <img src={download_icon} alt=""/>
            </a>
        </button>
        <button className="purple_button">
            <a href="/registro">
                <p>agregar usuario</p>
                <img src={plus_icon} alt=""/>
            </a>
        </button>
    </div>
    </>
  )
}

export default AdminUsers





