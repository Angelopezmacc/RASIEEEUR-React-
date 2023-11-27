import './App.css'
import input from '../public/img/input.svg'
import log_in_button from '../public/img/bx-right-arrow-alt.svg'
import download_icon from '../public/img/bx-download.svg'
import trash_icon from '../public/img/bx-trash.svg'
import edit_icon from '../public/img/bxs-edit.svg'
import plus_icon from '../public/img/bx-plus-circle.svg'
import logo from '../public/img/RASIEEE.png'
import Registro from './Registro.jsx'
import LogIn from './LogIn.jsx'


function AdminUsers() {
  return (
    <>
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
            <td class="no_border actions">
                <a href=""><img src={trash_icon} alt=""/></a>
                <a href="edit_mode.html"><img src={edit_icon} alt=""/></a>
            </td>
        </tr>

        <tr>
            <td>nicolas</td>
            <td>332215554</td>
            <td>gallego@prueba.com</td>
            <td class="no_border actions">
                <a href=""><img src={trash_icon} alt=""/></a>
                <a href=""><img src={edit_icon}  alt=""/></a>
            </td>
        </tr>

        <tr>
            <td>konnichiwa</td>
            <td>332215554</td>
            <td>ino@prueba.com</td>
            <td class="no_border actions">
                <a href=""><img src={trash_icon} alt=""/></a>
                <a href=""><img src={edit_icon} alt=""/></a>
            </td>
        </tr>
    </table>

    <div class="admin_actions">
        <button class="blue_button">
            <a href="#">
                <p>cargar todos</p>
                <img src={download_icon} alt=""/>
            </a>
        </button>
        <button class="purple_button">
            <a href="add_users.html">
                <p>agregar usuario</p>
                <img src={plus_icon} alt=""/>
            </a>
        </button>
    </div>
    </>
  )
}

export default AdminUsers





