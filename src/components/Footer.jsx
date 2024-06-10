import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const footerAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true },
};

const iconHoverAnimation = {
  whileHover: { scale: 1.1, color: "#FFD700" }, // Color amarillo con escala más ligera
  transition: { duration: 0.2 },
};

function Footer() {
  return (
    <motion.footer
      className="bg-blue-900 text-white py-8"
      {...footerAnimationProps}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 items-center">
          <motion.a href="tel:1234567890" {...iconHoverAnimation}>
            <FaPhone size={24} />
          </motion.a>
          <motion.a href="#" {...iconHoverAnimation}>
            <FaMapMarkerAlt size={24} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/" {...iconHoverAnimation}>
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a href="mailto:info@example.com" {...iconHoverAnimation}>
            <FaEnvelope size={24} />
          </motion.a>
        </div>
        <div className="mt-4 text-center">
          <p>© 2024 Consultora Permol. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
