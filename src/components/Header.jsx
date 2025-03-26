import React, { useState, useEffect } from "react";
import { Handshake } from "lucide-react";
import HamburguerMenu from "./HamburguerMenu";

function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{ opacity, transition: "opacity 0.3s ease" }}
      className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 z-10 h-16 md:h-20 lg:h-24"
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Handshake size={30} aria-hidden="true" />
          <span className="sr-only">Consultora Permol</span>
        </div>
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden md:block"
        >
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="btn btn-nav"
                title="Conoce más sobre nosotros"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#values"
                className="btn btn-nav"
                title="Descubre nuestros valores"
              >
                Valores
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="btn btn-nav"
                title="Nuestros servicios"
              >
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-nav" title="Contáctanos">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden" aria-label="Menú de navegación">
          <HamburguerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
