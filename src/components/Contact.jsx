// Contact.jsx

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Modal from "./Modal";

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

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("El correo no es válido").required("El correo es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

function Contact() {
  const [isModalVisible, setModalVisible] = useState(false);

  const phoneNumber = "+5493424085669";
  const message = encodeURIComponent(
    "¡Hola desde Permol! ¿Cómo podemos ayudarte?"
  );

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Aquí se manejaría el envío del formulario a Firebase
      console.log('Formulario enviado:', values);

      // Simulación de envío exitoso
      resetForm();
      setModalVisible(true);
    },
  });

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
          <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
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
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'}`}
                rows="4"
                required
              ></textarea>
              {formik.touched.message && formik.errors.message && <p className="text-red-500 text-sm">{formik.errors.message}</p>}
            </motion.div>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
      </div>
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <h2 className="text-2xl font-bold mb-4">¡Formulario enviado con éxito!</h2>
        <p>Te responderemos a la brevedad.</p>
      </Modal>
    </motion.section>
  );
}

export default Contact;
