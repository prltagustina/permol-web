import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const iconHoverAnimation = {
  whileHover: { scale: 1.1, color: "#5472d3" },
  transition: { duration: 0.2 },
};

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white py-8"
      role="contentinfo"
      aria-label="Información del pie de página"
    >
      <div className="container mx-auto px-4">
        {/* Navegación de redes y contacto */}
        <nav aria-label="Enlaces a redes sociales y contacto">
          <ul className="flex justify-center space-x-6 items-center">
            <li>
              <motion.a
                href="https://www.linkedin.com/in/santiagoperaltarrhh/"
                {...iconHoverAnimation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="mailto:consultorapermol@outlook.com"
                {...iconHoverAnimation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Correo Electrónico"
                title="Correo Electrónico"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.google.com/maps/place/Santa+Fe,+Santa+Fe+Province,+Argentina"
                {...iconHoverAnimation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ubicación en Google Maps"
                title="Ubicación en Google Maps"
              >
                <FaMapMarkerAlt size={24} />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="tel:5493424085669"
                {...iconHoverAnimation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teléfono"
                title="Teléfono"
              >
                <FaPhone size={24} />
              </motion.a>
            </li>
          </ul>
        </nav>

        {/* Texto de derechos reservados */}
        <div className="mt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Consultora Permol.
            <br className="sm:hidden" /> Todos los derechos reservados.
          </p>
        </div>

        {/* Contenedor para "Desarrollado por" */}
        <div className="flex justify-center items-center mt-2">
          <span className="text-sm mr-1">Desarrollado por</span>
          <motion.a
            href="https://agustina-peralta.web.app/"
            {...iconHoverAnimation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-[#5472d3] font-semibold"
            aria-label="Portafolio de Agustina Peralta"
            title="Portafolio de Agustina Peralta"
          >
            Agustina Peralta
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
