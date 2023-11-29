// import React from "react";
// import "../css/Index.css";
// import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
// import { Carousel } from 'react-bootstrap';  // Importa Carousel de react-bootstrap
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
//         <img src={companyImage} alt="Logo" width="auto" height="80%" />
//         <div className="inpage">
//           <ScrollLink to="inicio" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//             Inicio
//           </ScrollLink>
//           <ScrollLink to="nuestro-equipo" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//             Nuestro Equipo
//           </ScrollLink>
//           <ScrollLink to="quieres-unirte" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//             Quieres Unirte
//           </ScrollLink>
//           <ScrollLink to="proyectos" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//             Proyectos
//           </ScrollLink>
//         </div>
//         <div className="log">
//           <a href="#">Log-in</a>
//         </div>
//       </nav>

//       {/* Sección de desplazamiento horizontal */}
//       <section className="hScroll">
//         <Element name="inicio" className="hScroll_block caja1">
//           {/* Carousel en la sección de inicio */}
//           <Carousel id="carouselExample">
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={companyImage}
//                 alt="First slide"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={lineaImage}
//                 alt="Second slide"
//               />
//             </Carousel.Item>
//             {/* Agrega más elementos Carousel.Item según sea necesario con tus imágenes importadas */}
//           </Carousel>
//         </Element>

//         <Element name="nuestro-equipo" className="hScroll_block caja2">
//           {/* Contenido de la sección "Nuestro Equipo" */}
//           <h2>Nuestro Equipo</h2>
//           <p>Aquí va el contenido sobre el equipo.</p>
//         </Element>

//         <Element name="quieres-unirte" className="hScroll_block">
//           {/* Contenido de la sección "Quieres Unirte" */}
//           <iframe
//             title="Formulario"
//             width="500px"
//             height="600px"
//             src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
//             style={{ border: "none", maxWidth: "auto", maxHeight: "80%", marginTop: "5%", marginRight: "50%" }}
//             allowFullScreen
//             webkitAllowFullScreen
//             mozAllowFullScreen
//             msAllowFullScreen
//           ></iframe>
//         </Element>

//         <Element name="proyectos" className="hScroll_block">
//           {/* Contenido de la sección "Proyectos" */}
//           <h2>Proyectos</h2>
//           <p>Aquí va el contenido sobre proyectos.</p>
//         </Element>
        
//         {/* ... otras secciones ... */}
//       </section>
//     </div>
//   );
// };

// export default Index;


import React from "react";
import "../css/Index.css";
import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import companyImage from "../img/RASIEEE3.png";
import lineaImage from "../img/linea.png";
import competencia1 from "../img/RoPF.webp";
import competencia2 from "../img/Runbt.jpg";
import competencia3 from "../img/utprobo.jpg";

const Index = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Sección de desplazamiento horizontal */}
      <section className="hScroll">
        <div className="hScroll_block caja1">
          <div className="background">
            <img className="img1" src={companyImage} alt="Imagen 1" width="auto" height="auto" />
          </div>
        </div>
        <div className="hScroll_block caja2">
          <div className="background">
          <Carousel id="carouselExample">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={competencia1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={competencia2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100 carousel-image"
              src={competencia3}
              alt="Second slide"
            />
          </Carousel.Item>
          {/* Agrega más elementos Carousel.Item según sea necesario con tus imágenes importadas */}
        </Carousel>
          </div>
        </div>
        <div className="hScroll_block">
          <div className="background">
            <section ClassName="form">
              <iframe
                width="500px"
                height="600px"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
                style={{ border: "none", maxWidth: "auto", maxHeight: "80%", marginTop: "5%", marginRight: "50%" }}
                allowFullScreen
                webkitAllowFullScreen
                mozAllowFullScreen
                msAllowFullScreen
              ></iframe>
            </section>
            
          </div>
        </div>
        <div className="hScroll_block">
          <div className="background"></div>
        </div>
        <div className="hScroll_block">
          <div className="background"></div>
        </div>
        <div className="hScroll_block">
          <div className="background"></div>
        </div>
      </section>
      <nav className="navbarra">
        <img src={companyImage} alt="Logo" width="auto" height="80%" />
        <div className="inpage">
          <ScrollLink to="inicio" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
            Inicio
          </ScrollLink>
          <ScrollLink to="caja2" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
            Nuestro Equipo
          </ScrollLink>
          <ScrollLink to="quieres-unirte" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
            Quieres Unirte
          </ScrollLink>
          <ScrollLink to="proyectos" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
            Proyectos
          </ScrollLink>
        </div>
        <div className="log">
          <a href="#">Log-in</a>
        </div>
      </nav>
    </div>
  );
};

export default Index;

// import React from "react";
// import "../css/Index.css";
// import companyImage from "../img/RASIEEE3.png";
// import lineaImage from "../img/linea.png";

// const Index = () => {
//   const [mosaicImages, setMosaicImages] = useState([companyImage, lineaImage]);
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <img src={companyImage} alt="Logo" width="auto" height="80%" />
//         <div className="inpage">
//           <a href="#">Inicio</a>
//           <a href="#">Nosotros</a>
//           <a href="#">Unete</a>
//           <a href="#">Proyectos</a>
//         </div>
//         <div className="log">
//           <a href="#">Log-in</a>
//         </div>
//       </nav>

//       {/* Sección de desplazamiento horizontal */}
//       <section className="hScroll">
//         <div className="hScroll_block caja1">
//           <div className="background">
//             <img className="img1" src={companyImage} alt="Imagen 1" width="auto" height="auto" />
//           </div>
//         </div>
//         <div className="hScroll_block caja2">
//           <div className="background"></div>
//         </div>
//         <div className="hScroll_block">
//           <div className="background">
//             <iframe
//               width="500px"
//               height="600px"
//               src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
//               frameBorder="10"
//               marginWidth="200px"
//               marginHeight="200px"
//               style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
//               allowFullScreen
//               webkitAllowFullScreen
//               mozAllowFullScreen
//               msAllowFullScreen
//             ></iframe>
//           </div>
//         </div>
//         <div className="hScroll_block">
//           <div className="background"></div>
//         </div>
//         <div className="hScroll_block">
//           <div className="background"></div>
//         </div>
//         <div className="hScroll_block">
//           <div className="background"></div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;



// import React, { useState } from "react";
// import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
// import "../css/Index.css";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import companyImage from "../img/RASIEEE3.png";
// import lineaImage from "../img/linea.png";

// const Index = () => {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   const [mosaicImages, setMosaicImages] = useState([companyImage, lineaImage]);
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <ul>
//           <li>
//             <ScrollLink to="inicio" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Inicio
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="nuestro-equipo" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Nuestro Equipo
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="quieres-unirte" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Quieres Unirte
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="proyectos" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Proyectos
//             </ScrollLink>
//           </li>
//           <li>
//             {/* Enlace directo a otra página */}
//             <a href="/Proyectos">Log In</a>
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
//         <Carousel id="carouselExample">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={companyImage}
//               alt="First slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={lineaImage}
//               alt="Second slide"
//             />
//           </Carousel.Item>
//           {/* Agrega más elementos Carousel.Item según sea necesario con tus imágenes importadas */}
//         </Carousel>
//       </Element>

//       <Element name="nuestro-equipo" className="section">
//         {/* Contenido de la sección "Nuestro Equipo" */}
//         <h2>Nuestro Equipo</h2>
//       </Element>

//       <Element name="quieres-unirte" className="section">
//         {/* Contenido de la sección "Quieres Unirte" */}
//         <iframe
//           title="Formulario"
//           width="500px"
//           height="600px"
//           src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
//           frameBorder="10"
//           marginWidth="200px"
//           marginHeight="200px"
//           style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
//           allowFullScreen
//           webkitAllowFullScreen
//           mozAllowFullScreen
//           msAllowFullScreen
//         ></iframe>
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


// ***************************************************
// import React from "react";
// import "../css/Index.css";
// import companyImage from "../img/RASIEEE3.png";

// const Index = () => {
//   return (
//     <section className="hScroll">
//       <div className="hScroll_block">
//         <div className="background">
//           {/* <img className="img1" src="../img/RASIEEE3.png" alt="Imagen 1" /> */}
//           <img src={companyImage} className="img1" alt="Imagen 1" />
//         </div>
//       </div>
//       <div className="hScroll_block">
//         <div className="background"></div>
//       </div>
//       <div className="hScroll_block">
//         <div className="background">
//           <iframe
//             title="Formulario"
//             width="500px"
//             height="600px"
//             src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
//             frameBorder="10"
//             marginWidth="200px"
//             marginHeight="200px"
//             style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
//             allowFullScreen
//             webkitAllowFullScreen
//             mozAllowFullScreen
//             msAllowFullScreen
//           ></iframe>
//         </div>
//       </div>
//       <div className="hScroll_block">
//         <div className="background"></div>
//       </div>
//       <div className="hScroll_block">
//         <div className="background"></div>
//       </div>
//       <div className="hScroll_block">
//         <div className="background"></div>
//       </div>
//     </section>
//   );
// };

// export default Index;

// // Importa las imágenes necesarias
// import companyImage from "../img/RASIEEE3.png";
// import lineaImage from "../img/linea.png";

// // Importa lo necesario de react y react-scroll
// import React from "react";
// import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
// import "../css/Index.css"; // Ajusta la ruta según tu estructura de carpetas

// const Navbar = () => {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <ul>
//           <li>
//             <ScrollLink to="company-image" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Inicio
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="inicio" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Inicio
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="nuestro-equipo" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Nuestro Equipo
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="quieres-unirte" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
//               Quieres Unirte
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="proyectos" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
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

// export default Navbar;



