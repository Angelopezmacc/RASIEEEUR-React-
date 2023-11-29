import React from "react";
import "../css/Index.css";
import companyImage from "../img/RASIEEE3.png";
import lineaImage from "../img/linea.png";

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
          <div className="background"></div>
        </div>
        <div className="hScroll_block">
          <div className="background">
            <iframe
              width="500px"
              height="600px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
              frameBorder="10"
              marginWidth="200px"
              marginHeight="200px"
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
              allowFullScreen
              webkitAllowFullScreen
              mozAllowFullScreen
              msAllowFullScreen
            ></iframe>
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
      <nav className="navbar">
        <img src={companyImage} alt="Logo" width="auto" height="80%" />
        <div className="inpage">
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Unete</a>
          <a href="#">Proyectos</a>
        </div>
        <div className="log">
          <a href="#">Log-in</a>
        </div>
      </nav>
    </div>
  );
};

export default Index;