import React, { useEffect, useRef } from "react";

function Modal({ isVisible, onClose, children, title = "Modal" }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isVisible]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded shadow-md"
        tabIndex="-1"
      >
        <h2 id="modal-title" className="text-lg font-bold mb-4">
          {title}
        </h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
