import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 items-center">
          <a href="tel:1234567890">
            <FaPhone size={24} />
          </a>
          <a href="#">
            <FaMapMarkerAlt size={24} />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:info@example.com">
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="mt-4 text-center">
          <p>© 2024 Consultora Permol. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
