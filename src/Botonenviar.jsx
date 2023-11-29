import './index.css'
import log_in_button from '../public/img/bx-right-arrow-alt.svg'

function Botonenviar() {
  return (
    <>
    <div className='botones_log'>
        <div className='log_in_boton'>
            <img src={log_in_button} alt="" />
            <p>Enviar</p>
        </div>
    </div>
    </>
  )
}
export default Botonenviar