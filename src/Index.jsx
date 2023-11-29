import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import companyImage from "../public/img/RASIEEE3.png";
import competencia1 from  "../public/img/RoPF.webp";
import competencia2 from "../public/img/Runbt.jpg";
import competencia3 from "../public/img/utprobo.jpg";
import rbt1 from "../public/img/futro.webp";
import rbt2 from "../public/img/seguidor.jpg";
import rbt3 from "../public/img/sumo.webp";
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
          <div className="background" ref={ref1}>
            <div className="carusel1">
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
            <div className="carusel2">
            <Carousel id="carouselExample">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={rbt1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={rbt2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src={rbt3}
                alt="Second slide"
              />
            </Carousel.Item>
              {/* Agrega más elementos Carousel.Item según sea necesario con tus imágenes importadas */}
            </Carousel>
            </div>
          </div>
        </div>
        <div className="hScroll_block">
          <div className="background" ref={ref2}></div>
        </div>
        <div className="hScroll_block">
          <div className="background" ref={ref3}>
            <div className="invita">
            <iframe
              width="500px"
              height="600px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=V1dSrrqJME2i90l5bvjGBFT-fMaN4a5Ol9E3IFlJ4K5UNlVSUVJXUkdYUlQ3T1VRS0lOOExLWDJOQS4u&embed=true"
              style={{ border: "none", maxWidth: "auto", maxHeight: "80%", marginTop: "5%", marginLeft: "0%" }}
              allowFullScreen
              webkitAllowFullScreen
              mozAllowFullScreen
              msAllowFullScreen
            ></iframe>
            </div>
            <div className="invita">
              <h2 className="preg">¿Quieres unirte a nuestro equipo?</h2>
              <t className="tx1">Llena el formulario de inscripción, te enviaremos un mensaje a tu correo institucional para continuar el proceso y que hagas partes del equipo.</t>
            </div>
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
          <button className="bt1" onClick={handleClick}>
            Inicio
          </button>
          <button className="bt1" onClick={handleClick1}>
            Nosotros
          </button>
          <button className="bt1" onClick={handleClick2}>
            Únete
          </button>
          <button className="bt1" onClick={handleClick3}>
            Proyectos
          </button>
        </div>
        <div className="log">
          <a href="/login">Log-in</a>
        </div>
      </nav>
    </div>
  );
};

export default Index;