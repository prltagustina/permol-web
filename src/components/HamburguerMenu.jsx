import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function HamburguerMenu({ menuColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al contenedor del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      // Cierra el menú si se hace clic fuera de él
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className={`text-white md:hidden ${menuColor}`}
        style={{ outline: "none" }}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </motion.svg>
      </button>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="menu"
          aria-label="Menú de navegación"
          className="fixed z-50 top-12 right-0 bg-gray-100 p-4 rounded-lg text-gray-800 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ minWidth: "200px" }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 m-2"
            style={{ outline: "none" }}
            aria-label="Cerrar menú"
          >
            {/* Puedes agregar un icono de cierre (por ejemplo, una "X") aquí */}
          </button>
          <ul className="space-y-2" role="menu">
            <li role="none">
              <motion.a
                href="#about"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkClick}
                role="menuitem"
                tabIndex="0"
              >
                Sobre Nosotros
              </motion.a>
            </li>
            <li role="none">
              <motion.a
                href="#values"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkClick}
                role="menuitem"
                tabIndex="0"
              >
                Valores
              </motion.a>
            </li>
            <li role="none">
              <motion.a
                href="#services"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkClick}
                role="menuitem"
                tabIndex="0"
              >
                Servicios
              </motion.a>
            </li>
            <li role="none">
              <motion.a
                href="#contact"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkClick}
                role="menuitem"
                tabIndex="0"
              >
                Contacto
              </motion.a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default HamburguerMenu;
