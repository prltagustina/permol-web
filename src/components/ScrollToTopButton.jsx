import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Volver al inicio"
          title="Volver al inicio"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
