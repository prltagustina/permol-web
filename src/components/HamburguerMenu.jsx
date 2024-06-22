import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function HamburguerMenu({ menuColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú hamburguesa

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      // Verificar si se hizo clic fuera del menú hamburguesa
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Agregar un event listener para detectar clics en cualquier parte de la página
    document.addEventListener("click", closeMenu);

    // Limpiar el event listener cuando el componente se desmonta o el estado cambia
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]); // Asegurarse de que el efecto se ejecute solo cuando el estado isOpen cambia

  const handleLinkClick = () => {
    setIsOpen(false); // Cerrar el menú al hacer clic en cualquier enlace del menú desplegable
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className={`text-white md:hidden ${menuColor}`} // Clase dinámica para el color del menú
        style={{ outline: "none" }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} // Efecto de escala cuando se presiona el botón
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
          style={{ minWidth: "200px" }} // Ajustar el ancho mínimo según sea necesario
        >
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 m-2"
            style={{ outline: "none" }}
          >
            {/* Agregar icono de cierre (X) si lo deseas */}
          </button>
          <ul className="space-y-2">
            {/* Espaciado vertical entre elementos */}
            <li>
              <motion.a
                href="#about"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }} // Efecto de escala cuando se presiona el botón
                onClick={handleLinkClick} // Manejar clic en el enlace para cerrar el menú
              >
                Sobre Nosotros
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#values"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }} // Efecto de escala cuando se presiona el botón
                onClick={handleLinkClick} // Manejar clic en el enlace para cerrar el menú
              >
                Valores
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#services"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }} // Efecto de escala cuando se presiona el botón
                onClick={handleLinkClick} // Manejar clic en el enlace para cerrar el menú
              >
                Servicios
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                className="hover:bg-blue-600 hover:text-white text-lg py-3 px-4 block rounded-md text-center"
                whileTap={{ scale: 0.95 }} // Efecto de escala cuando se presiona el botón
                onClick={handleLinkClick} // Manejar clic en el enlace para cerrar el menú
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
