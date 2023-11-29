import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Index.css";
import companyImage from "../img/RASIEEE3.png";
import { useRef } from "react";

const Index = () => {

const ref1 = useRef(0);
const ref2 = useRef(1);
const ref3 = useRef(2);
const ref4 = useRef(3);

const handleClick = () => {
  ref1.current?.scrollIntoView({behavior: 'smooth'});
};
const handleClick1 = () => {
  ref2.current?.scrollIntoView({behavior: 'smooth'});
};
const handleClick2 = () => {
  ref3.current?.scrollIntoView({behavior: 'smooth'});
};
const handleClick3 = () => {
  ref4.current?.scrollIntoView({behavior: 'smooth'});
};

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
          <div className="background" ref={ref1}></div>
        </div>
        <div className="hScroll_block">
          <div className="background" ref={ref2}></div>
        </div>
        <div className="hScroll_block">
          <div className="background" ref={ref3}>
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
          </div>
        </div>
        <div className="hScroll_block" ref={ref4}>
          <div className="background"></div>
        </div>
        <div className="hScroll_block">
          <div className="background"></div>
        </div>
      </section>
      <nav className="navbarra">
        <img src={companyImage} alt="Logo" width="auto" height="80%" />
        <div className="inpage">
          <button ClassName="bt1" onClick={handleClick}>
            Inicio
          </button>
          <button ClassName="bt1" onClick={handleClick1}>
            Nuestro Equipo
          </button>
          <button ClassName="bt1" onClick={handleClick2}>
            Quieres Unirte
          </button>
          <button ClassName="bt1" onClick={handleClick3}>
            Proyectos
          </button>
        </div>
        <div className="log">
          <a href="#">Log-in</a>
        </div>
      </nav>
    </div>
  );
};

export default Index;