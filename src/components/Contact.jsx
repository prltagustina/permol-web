import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

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
  const phoneNumber = "+5493424085669";
  const message = encodeURIComponent(
    "¡Hola desde Permol! ¿Cómo podemos ayudarte?"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el envío del formulario
    // Enviar los datos a un servidor, realizar alguna validación
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
      {...animationProps}
    >
      <div className="container mx-auto text-center bg-white p-8 shadow-md rounded-lg">
        <motion.h2
          className="text-3xl font-bold mb-8"
          {...staggeredAnimationProps(0.2)}
        >
          Contacto
        </motion.h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col space-y-4"
        >
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...staggeredAnimationProps(1)}
          >
            Enviar
          </motion.button>
          <motion.div
            className="mt-4 text-center"
            {...staggeredAnimationProps(1.2)}
          >
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Contactanos por WhatsApp
            </a>
          </motion.div>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
