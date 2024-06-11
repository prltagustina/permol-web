import React, { useState } from "react";
import { motion } from "framer-motion";

function HamburguerMenu({ menuColor }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={`text-white md:hidden ${menuColor}`} // Usar clase dinámica para el color del menú
        style={{ outline: "none" }}
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
          className="fixed z-50 top-12 right-0 bg-gray-100 p-4 rounded-lg text-gray-800 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 m-2"
            style={{ outline: "none" }}
          >
            {/* Agregar icono de cierre (X) si lo deseas */}
          </button>
          <ul className="mr-8">
            <li>
              <a href="#about" className="hover:text-blue-600">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#values" className="hover:text-blue-600">
                Valores
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contacto
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default HamburguerMenu;
