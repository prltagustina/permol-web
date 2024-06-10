import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="values" className="py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <motion.div
          className="mx-auto max-w-2xl lg:text-left"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            Guiando el Desarrollo Organizacional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              className="value bg-white p-6 shadow-md rounded"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Misión</h3>
              <p className="text-gray-700">
                Nuestra misión es brindar soluciones eficientes en la gestión de
                recursos humanos que se adapten a las necesidades específicas de
                cada cliente, promoviendo el desarrollo y el éxito mutuo.
              </p>
            </motion.div>
            <motion.div
              className="value bg-white p-6 shadow-md rounded"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Visión</h3>
              <p className="text-gray-700">
                Nuestra visión es acompañar profesionalmente a nuestros clientes
                para optimizar su desempeño organizacional, estableciendo
                vínculos laborales personalizados y duraderos.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="mt-8"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              Nuestros Valores y Principios
            </h2>
            <motion.div
              className="value bg-white p-6 shadow-md rounded"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <ul className="text-gray-700">
                <li>
                  <strong>Profesionalismo:</strong> Actuamos con integridad,
                  excelencia y dedicación en todo lo que hacemos.
                </li>
                <li>
                  <strong>Calidez humana:</strong> Valoramos y respetamos a cada
                  persona, mostrando empatía y consideración en nuestras
                  interacciones.
                </li>
                <li>
                  <strong>Compromiso:</strong> Nos comprometemos a cumplir con
                  nuestras responsabilidades y a superar las expectativas de
                  nuestros clientes y colaboradores.
                </li>
                <li>
                  <strong>Respeto mutuo:</strong> Fomentamos un ambiente de
                  trabajo inclusivo y respetuoso, donde todas las opiniones y
                  perspectivas son valoradas.
                </li>
                <li>
                  <strong>Ética de trabajo:</strong> Nos regimos por los más
                  altos estándares éticos en todas nuestras actividades y
                  relaciones comerciales.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Values;
