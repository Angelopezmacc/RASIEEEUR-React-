import React from "react";
import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import "../css/Index.css";
import companyImage from "../img/RASIEEE3.png";
import lineaImage from "../img/linea.png";

const Index = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <ScrollLink to="inicio" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="nuestro-equipo" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Nuestro Equipo
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="quieres-unirte" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Quieres Unirte
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="proyectos" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Proyectos
            </ScrollLink>
          </li>
          <li>
            {/* Enlace directo a otra página */}
            <a href="/login">Log In</a>
          </li>
        </ul>
        {/* Barra horizontal */}
        <div className="navbar-line">
          <img src={lineaImage} alt="Barra horizontal" />
        </div>
      </nav>

      {/* Secciones */}
      <Element name="company-image" className="section">
        {/* Imagen de la empresa */}
        <div className="company-image">
          <img src={companyImage} alt="Imagen de la empresa" />
        </div>
      </Element>

      <Element name="inicio" className="section">
        {/* Contenido de la sección "Inicio" */}
        <h2>Inicio</h2>
      </Element>

      <Element name="nuestro-equipo" className="section">
        {/* Contenido de la sección "Nuestro Equipo" */}
        <h2>Nuestro Equipo</h2>
      </Element>

      <Element name="quieres-unirte" className="section">
        {/* Contenido de la sección "Quieres Unirte" */}
        <h2>Quieres Unirte</h2>
      </Element>

      <Element name="proyectos" className="section">
        {/* Contenido de la sección "Proyectos" */}
        <h2>Proyectos</h2>
      </Element>

      {/* Barra de desplazamiento */}
      <div className="scroll-bar">
        <img src={lineaImage} alt="Barra de desplazamiento" />
      </div>

      {/* Botón para volver al inicio */}
      <div className="back-to-top" onClick={scrollToTop}>
        Volver al Inicio
      </div>
    </div>
  );
};

export default Index;


// import React from "react";
// import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
// import "../css/Index.css";
// import companyImage from "../img/RASIEEE3.png";
// import lineaImage from "../img/linea.png";

// const Index = () => {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <ul>
//           <li>
//             <ScrollLink to="inicio" spy={true} smooth={true} offset={-70} duration={500}>
//               Inicio
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="nuestro-equipo" spy={true} smooth={true} offset={-70} duration={500}>
//               Nuestro Equipo
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="quieres-unirte" spy={true} smooth={true} offset={-70} duration={500}>
//               Quieres Unirte
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="proyectos" spy={true} smooth={true} offset={-70} duration={500}>
//               Proyectos
//             </ScrollLink>
//           </li>
//           <li>
//             {/* Enlace directo a otra página */}
//             <a href="/login">Log In</a>
//           </li>
//         </ul>
//         {/* Barra horizontal */}
//         <div className="navbar-line">
//           <img src={lineaImage} alt="Barra horizontal" />
//         </div>
//       </nav>

//       {/* Secciones */}
//       <Element name="company-image" className="section">
//         {/* Imagen de la empresa */}
//         <div className="company-image">
//           <img src={companyImage} alt="Imagen de la empresa" />
//         </div>
//       </Element>
      
//       <Element name="inicio" className="section">
//         {/* Contenido de la sección "Inicio" */}
//         <h2>Inicio</h2>
//       </Element>

//       <Element name="nuestro-equipo" className="section">
//         {/* Contenido de la sección "Nuestro Equipo" */}
//         <h2>Nuestro Equipo</h2>
//       </Element>

//       <Element name="quieres-unirte" className="section">
//         {/* Contenido de la sección "Quieres Unirte" */}
//         <h2>Quieres Unirte</h2>
//       </Element>

//       <Element name="proyectos" className="section">
//         {/* Contenido de la sección "Proyectos" */}
//         <h2>Proyectos</h2>
//       </Element>

//       {/* Barra de desplazamiento */}
//       <div className="scroll-bar">
//         <img src={lineaImage} alt="Barra de desplazamiento" />
//       </div>

//       {/* Botón para volver al inicio */}
//       <div className="back-to-top" onClick={scrollToTop}>
//         Volver al Inicio
//       </div>
//     </div>
//   );
// };

// export default Index;

