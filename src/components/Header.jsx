import React from "react"; 
import { Handshake } from "lucide-react"; // Importar el ícono Handshake
import HamburguerMenu from "./HamburguerMenu";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-900 text-white p-4 z-10 h-16 md:h-20 lg:h-24 shadow-[0px_6px_10px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span>PerMol</span>
          <Handshake size={24} /> {/* Aquí está el ícono alineado a la derecha de "PerMol" */}
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="btn btn-nav">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#values" className="btn btn-nav">
                Valores
              </a>
            </li>
            <li>
              <a href="#services" className="btn btn-nav">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-nav">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <HamburguerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
