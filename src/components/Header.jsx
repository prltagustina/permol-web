import React from "react";
import HamburguerMenu from "./HamburguerMenu";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-900 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Permol</div>
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
