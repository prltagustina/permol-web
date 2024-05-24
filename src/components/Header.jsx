import React from "react";
import HamburguerMenu from "./HamburguerMenu";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Permol</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="#values" className="hover:underline">
                Valores
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
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
