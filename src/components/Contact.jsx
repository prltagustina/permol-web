import React, { useState } from "react";
import { motion } from "framer-motion";
import { firestore, serverTimestamp } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Modal from "./Modal"; // Asegúrate de que la ruta sea correcta

const animationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  viewport: { once: true },
};

const staggeredAnimationProps = (delay) => ({
  ...animationProps,
  transition: { ...animationProps.transition, delay },
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "El nombre es obligatorio.";
    if (!formData.email) {
      tempErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El email no es válido.";
    }
    if (!formData.message) tempErrors.message = "El mensaje es obligatorio.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      await addDoc(collection(firestore, "contactForms"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setFormData({ name: "", email: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }

    setSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
      {...animationProps}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          {...staggeredAnimationProps(0.2)}
        >
          Contacto
        </motion.h2>
        <div
          className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg"
          style={{ maxWidth: "500px" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <motion.div {...staggeredAnimationProps(0.4)}>
              <label
                htmlFor="name"
                className="block text-left mb-2 text-gray-700"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
              {errors.name && (
                <p className="text-red-500 text-left">{errors.name}</p>
              )}
            </motion.div>
            <motion.div {...staggeredAnimationProps(0.6)}>
              <label
                htmlFor="email"
                className="block text-left mb-2 text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
              {errors.email && (
                <p className="text-red-500 text-left">{errors.email}</p>
              )}
            </motion.div>
            <motion.div {...staggeredAnimationProps(0.8)}>
              <label
                htmlFor="message"
                className="block text-left mb-2 text-gray-700"
              >
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-600`}
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-left">{errors.message}</p>
              )}
            </motion.div>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              {...staggeredAnimationProps(1)}
              disabled={submitting}
            >
              {submitting ? "Enviando..." : "Enviar"}
            </motion.button>
          </form>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          ¡El mensaje se envió con éxito!
        </h3>
        <p className="text-sm text-gray-500">Te responderemos a la brevedad.</p>
      </Modal>
    </motion.section>
  );
}

export default Contact;
