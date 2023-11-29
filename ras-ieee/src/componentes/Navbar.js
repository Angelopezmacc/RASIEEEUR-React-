import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../css/Navbar.css";

const Navbar = ({ activeSection }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <ScrollLink
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeSection === "inicio" ? "active" : ""}
          >
            Inicio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="equipo"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeSection === "equipo" ? "active" : ""}
          >
            Nuestro Equipo
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="unirte"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeSection === "unirte" ? "active" : ""}
          >
            Quieres Unirte
          </ScrollLink>
        </li>
        {/* Agrega más opciones de menú según sea necesario */}
      </ul>
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Volver al Inicio
      </div>
    </nav>
  );
};

export default Navbar;


