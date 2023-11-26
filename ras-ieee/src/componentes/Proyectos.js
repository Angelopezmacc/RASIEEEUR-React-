import React, { useState } from "react";
import '../css/Proyectos.css';

const Proyectos = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nuevaCaja, setNuevaCaja] = useState({ nombre: "", progreso: 0, integrantes: 0 });
  const [proyectos, setProyectos] = useState([
    { id: 1, nombre: "Caja 1", progreso: 50, integrantes: 5 },
    { id: 2, nombre: "Caja 2", progreso: 100, integrantes: 3 },
    { id: 3, nombre: "Caja 3", progreso: 17, integrantes: 7 },
  ]);
  const [editingProject, setEditingProject] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaCaja({
      ...nuevaCaja,
      [name]: value,
    });
  };

  const crearNuevaCaja = () => {
    setProyectos([...proyectos, { ...nuevaCaja, id: proyectos.length + 1 }]);
    setShowForm(false);
    setNuevaCaja({ nombre: "", progreso: 0, integrantes: 0 });
  };

  const editarProyecto = (id) => {
    setEditingProject(id);
  };

  const guardarEdicion = (id) => {
    setProyectos((prevProyectos) =>
      prevProyectos.map((proyecto) =>
        proyecto.id === id
          ? {
              ...proyecto,
              nombre: prompt("Edita el nombre del proyecto:", proyecto.nombre),
              progreso: parseInt(
                prompt("Edita el progreso del proyecto (%):", proyecto.progreso)
              ),
              integrantes: parseInt(
                prompt("Edita el número de integrantes:", proyecto.integrantes)
              ),
            }
          : proyecto
      )
    );
    setEditingProject(null);
  };

  const borrarProyecto = (id) => {
    const confirmacion = window.confirm(
      "¿Seguro que deseas borrar este proyecto?"
    );
    if (confirmacion) {
      setProyectos((prevProyectos) =>
        prevProyectos.filter((proyecto) => proyecto.id !== id)
      );
    }
  };

  return (
    <div className="container">
      <div className="header" style={{ backgroundColor: "#000", padding: "0 20px" }}>
        <div className="menu-icon" onClick={toggleMenu}>
          Menu
        </div>
        <div className="titulo">MIS PROYECTOS</div>
        <div className="user-icon">
          Usuario
        </div>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="proyectos">
        {proyectos.map((proyecto) => (
          <div className="proyecto" key={proyecto.id}>
            <div className="nombre" style={{ backgroundColor: "#333" }}>
              {proyecto.nombre}
            </div>
            <div
              className="progreso"
              style={{ backgroundColor: "#444", border: "1px solid #555" }}
            >
              <div
                className="barra"
                style={{ width: `${proyecto.progreso}%` }}
              ></div>
            </div>
            <div className="info-hover">
              <div className="integrantes">Integrantes: {proyecto.integrantes}</div>
              <div className="botones">
                <button className="editar" onClick={() => editarProyecto(proyecto.id)}>
                  Editar
                </button>
                <button className="borrar" onClick={() => borrarProyecto(proyecto.id)}>
                  Borrar
                </button>
              </div>
            </div>
            {editingProject === proyecto.id && (
              <div className="editar-form">
                <label htmlFor={`nombre-${proyecto.id}`}>Nombre:</label>
                <input
                  type="text"
                  id={`nombre-${proyecto.id}`}
                  name="nombre"
                  defaultValue={proyecto.nombre}
                />
                <label htmlFor={`progreso-${proyecto.id}`}>Progreso (%):</label>
                <input
                  type="number"
                  id={`progreso-${proyecto.id}`}
                  name="progreso"
                  defaultValue={proyecto.progreso}
                />
                <label htmlFor={`integrantes-${proyecto.id}`}>Integrantes:</label>
                <input
                  type="number"
                  id={`integrantes-${proyecto.id}`}
                  name="integrantes"
                  defaultValue={proyecto.integrantes}
                />
                <button onClick={() => guardarEdicion(proyecto.id)}>Guardar</button>
              </div>
            )}
          </div>
        ))}
        <div className="proyecto nuevo" onClick={toggleForm}>
          <div className="boton-crear">
            Crear
          </div>
        </div>
      </div>
      {showForm && (
        <div className="form-container">
          <div className="form">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nuevaCaja.nombre}
              onChange={handleInputChange}
            />
            <label htmlFor="progreso">Progreso (%):</label>
            <input
              type="number"
              id="progreso"
              name="progreso"
              value={nuevaCaja.progreso}
              onChange={handleInputChange}
            />
            <label htmlFor="integrantes">Integrantes:</label>
            <input
              type="number"
              id="integrantes"
              name="integrantes"
              value={nuevaCaja.integrantes}
              onChange={handleInputChange}
            />
            <button onClick={crearNuevaCaja}>Crear Caja</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;



// import React, { useState } from "react";
// import '../css/Proyectos.css';

// const Proyectos = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [nuevaCaja, setNuevaCaja] = useState({ nombre: "", progreso: 0 });

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNuevaCaja({
//       ...nuevaCaja,
//       [name]: value,
//     });
//   };

//   const crearNuevaCaja = () => {
//     // Aquí deberías manejar la lógica para agregar la nueva caja a tu lista de proyectos
//     console.log("Crear nueva caja:", nuevaCaja);
//     setShowForm(false);
//   };

//   const proyectos = [
//     { id: 1, nombre: "Caja 1", progreso: 30 },
//     { id: 2, nombre: "Caja 2", progreso: 50 },
//     { id: 3, nombre: "Caja 3", progreso: 80 },
//     { id: 4, nombre: "Caja 4", progreso: 20 },
//     { id: 5, nombre: "Caja 5", progreso: 90 },
//     { id: 6, nombre: "Caja 6", progreso: 40 },
//     { id: 7, nombre: "Caja 7", progreso: 60 },
//   ];

//   const editarProyecto = (id) => {
//     console.log("Editar el proyecto con id:", id);
//   };

//   const borrarProyecto = (id) => {
//     console.log("Borrar el proyecto con id:", id);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="menu-icon" onClick={toggleMenu}>
//           Menu
//         </div>
//         <div className="titulo">MIS PROYECTOS</div>
//         <div className="user-icon">
//           Usuario
//         </div>
//       </div>
//       <div className={`menu ${menuOpen ? "open" : ""}`}>
//         <ul>
//           <li>Inicio</li>
//           <li>Acerca de</li>
//           <li>Contacto</li>
//         </ul>
//       </div>
//       <div className="proyectos">
//         {proyectos.map((proyecto) => (
//           <div className="proyecto" key={proyecto.id}>
//             <div className="nombre">{proyecto.nombre}</div>
//             <div className="progreso">
//               <div
//                 className="barra"
//                 style={{ width: `${proyecto.progreso}%` }}
//               ></div>
//             </div>
//             <div className="botones">
//               <button className="editar" onClick={() => editarProyecto(proyecto.id)}>
//                 Editar
//               </button>
//               <button className="borrar" onClick={() => borrarProyecto(proyecto.id)}>
//                 Borrar
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="proyecto nuevo" onClick={toggleForm}>
//           <div className="boton-crear">
//             Crear
//           </div>
//         </div>
//       </div>
//       {showForm && (
//         <div className="form-container">
//           <div className="form">
//             <label htmlFor="nombre">Nombre:</label>
//             <input
//               type="text"
//               id="nombre"
//               name="nombre"
//               value={nuevaCaja.nombre}
//               onChange={handleInputChange}
//             />
//             <label htmlFor="progreso">Progreso:</label>
//             <input
//               type="number"
//               id="progreso"
//               name="progreso"
//               value={nuevaCaja.progreso}
//               onChange={handleInputChange}
//             />
//             <button onClick={crearNuevaCaja}>Crear Caja</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Proyectos;


//********************************************************************************************** */

