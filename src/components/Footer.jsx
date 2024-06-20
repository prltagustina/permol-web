import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
  FaCode, // Importa el ícono necesario para "Desarrollado por"
} from "react-icons/fa";

const iconHoverAnimation = {
  whileHover: { scale: 1.1, color: "#5472d3" },
  transition: { duration: 0.2 },
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 items-center">
          <motion.a
            href="https://www.linkedin.com/in/santiagoperaltarrhh/"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:consultorapermol@outlook.com"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} />
          </motion.a>
          <motion.a
            href="https://www.google.com/maps/place/Santa+Fe,+Santa+Fe+Province,+Argentina"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt size={24} />
          </motion.a>
          <motion.a
            href="tel:5493424085669"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone size={24} />
          </motion.a>
        </div>
        {/* Texto de derechos reservados */}
        <div className="mt-4 text-center">
          <p>© 2024 Consultora Permol. Todos los derechos reservados.</p>
        </div>
        {/* Contenedor para "Desarrollado por" */}
        <div className="flex justify-center items-center mt-2">
          <span className="text-sm mr-1">Desarrollado por</span> {/* Texto "Desarrollado por" */}
          <motion.a
            href="https://agustina-peralta.web.app/"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaCode size={24} /> {/* Ícono ficticio */}
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
