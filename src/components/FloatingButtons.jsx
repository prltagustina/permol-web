import React, { useEffect, useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

const FloatingButtons = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Puedes ajustar el umbral según necesites
      },
    );

    observer.observe(footer);

    return () => {
      observer.unobserve(footer);
    };
  }, []);

  // Si el footer es visible, no renderizamos los botones
  if (footerVisible) {
    return null;
  }

  return (
    <div role="toolbar" aria-label="Accesos rápidos">
      {/* Botón Scroll To Top en la esquina inferior izquierda */}
      <div
        className="fixed bottom-5 left-5"
        aria-label="Volver al inicio"
        tabIndex="0"
      >
        <ScrollToTopButton />
      </div>
      {/* Botón WhatsApp en la esquina inferior derecha */}
      <div
        className="fixed bottom-5 right-5"
        aria-label="Chat de WhatsApp"
        tabIndex="0"
      >
        <WhatsAppFloatingButton />
      </div>
    </div>
  );
};

export default FloatingButtons;
