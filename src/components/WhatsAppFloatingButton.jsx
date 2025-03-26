import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5493424085669";
    const message = encodeURIComponent(
      "¡Hola desde Permol! ¿Cómo podemos ayudarte?",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleWhatsAppClick}
      className="bg-[#25d366] text-white rounded-full w-[55px] h-[55px] flex justify-center items-center cursor-pointer transition-colors duration-300 hover:bg-[#128c7e] focus:outline-none focus:ring-2 focus:ring-[#128c7e]"
      aria-label="Abrir chat de WhatsApp"
      title="Abrir chat de WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </button>
  );
};

export default WhatsAppFloatingButton;
