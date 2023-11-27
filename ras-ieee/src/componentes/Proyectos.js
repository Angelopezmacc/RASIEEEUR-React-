import React, { useState } from "react";
import '../css/Proyectos.css';

const Proyectos = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nuevaCaja, setNuevaCaja] = useState({ nombre: "", progreso: 0, integrantes: [] });
  const [proyectos, setProyectos] = useState([
    { id: 1, nombre: "Caja 1", progreso: 50, integrantes: ["Estudiante 1", "Estudiante 2"] },
    { id: 2, nombre: "Caja 2", progreso: 100, integrantes: ["Estudiante 3", "Estudiante 4"] },
    { id: 3, nombre: "Caja 3", progreso: 17, integrantes: ["Estudiante 5", "Estudiante 6"] },
  ]);
  const [editingProject, setEditingProject] = useState(null);

  const nombresEstudiantes = [
    "Estudiante 1",
    "Estudiante 2",
    "Estudiante 3",
    "Estudiante 4",
    "Estudiante 5",
    "Estudiante 6",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setNuevaCaja({ nombre: "", progreso: 0, integrantes: [] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaCaja({
      ...nuevaCaja,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setNuevaCaja((prevCaja) => ({ ...prevCaja, integrantes: [...prevCaja.integrantes, value] }));
    } else {
      setNuevaCaja((prevCaja) => ({ ...prevCaja, integrantes: prevCaja.integrantes.filter((nombre) => nombre !== value) }));
    }
  };

  const renderCheckboxes = () => {
    return nombresEstudiantes.map((nombre) => (
      <label key={nombre} className="checkbox-label">
        <input
          type="checkbox"
          value={nombre}
          checked={nuevaCaja.integrantes.includes(nombre)}
          onChange={handleCheckboxChange}
        />
        {nombre}
      </label>
    ));
  };

  const crearNuevaCaja = () => {
    setProyectos([...proyectos, { ...nuevaCaja, id: proyectos.length + 1 }]);
    setShowForm(false);
  };

  const editarProyecto = (id) => {
    setEditingProject(id);
    setNuevaCaja(proyectos.find((proyecto) => proyecto.id === id));
  };

  const guardarEdicion = (id) => {
    setProyectos((prevProyectos) =>
      prevProyectos.map((proyecto) =>
        proyecto.id === id
          ? {
              ...proyecto,
              nombre: document.getElementById(`nombre-${id}`).value,
              progreso: parseInt(document.getElementById(`progreso-${id}`).value),
              integrantes: nuevaCaja.integrantes,
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
              <div className="integrantes">
                <strong>Integrantes:</strong> {proyecto.integrantes.join(", ")}
              </div>
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
              <div className="form editar-form">
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
                <label>Integrantes:</label>
                {renderCheckboxes()}
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
            {/* ... (código existente) */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;


//********************************************************************************************** */

