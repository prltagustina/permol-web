import React, { useState, useEffect } from "react";
import HamburguerMenu from "./HamburguerMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 z-10 transition-opacity duration-500 ${
        isScrolled ? "opacity-0" : "opacity-100"
      }`}
    >
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
              <a href="#values" className="hover:underline">
                Valores
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Servicios
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
