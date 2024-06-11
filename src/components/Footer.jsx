import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const iconHoverAnimation = {
  whileHover: { scale: 1.1, color: "#5472d3" }, // Cambiar el color a un tono azulado
  transition: { duration: 0.2 },
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      {" "}
      {/* Cambiar a un tono de gris oscuro */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 items-center">
          <motion.a
            href="tel:1234567890"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone size={24} />
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
        </div>
        <div className="mt-4 text-center">
          <p>© 2024 Consultora Permol. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
