import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const Values = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const values = [
    {
      title: "Profesionalismo",
      description:
        "Actuamos con integridad, excelencia y dedicación en todo lo que hacemos.",
    },
    {
      title: "Calidez humana",
      description:
        "Valoramos y respetamos a cada persona, mostrando empatía y consideración en nuestras interacciones.",
    },
    {
      title: "Compromiso",
      description:
        "Nos comprometemos a cumplir con nuestras responsabilidades y a superar las expectativas de nuestros clientes y colaboradores.",
    },
    {
      title: "Respeto mutuo",
      description:
        "Fomentamos un ambiente de trabajo inclusivo y respetuoso, donde todas las opiniones y perspectivas son valoradas.",
    },
    {
      title: "Ética de trabajo",
      description:
        "Nos regimos por los más altos estándares éticos en todas nuestras actividades y relaciones comerciales.",
    },
  ];

  const handleItemClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section id="values" className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Explora nuestra identidad ética
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pilares de nuestra cultura organizacional
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="value bg-white p-6 shadow-md rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold mb-4">Misión</h3>
            <p>
              Nuestra misión es brindar soluciones eficientes en la gestión de
              recursos humanos que se adapten a las necesidades específicas de
              cada cliente, promoviendo el desarrollo y el éxito mutuo.
            </p>
          </motion.div>
          <motion.div
            className="value bg-white p-6 shadow-md rounded"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold mb-4">Visión</h3>
            <p>
              Nuestra visión es acompañar profesionalmente a nuestros clientes
              para optimizar su desempeño organizacional, estableciendo vínculos
              laborales personalizados y duraderos.
            </p>
          </motion.div>
          <div className="md:justify-between justify-center md:flex-row flex-col mt-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Valores y Principios
            </h2>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value bg-white p-6 shadow-md rounded cursor-pointer"
                onClick={() => handleItemClick(index)}
                style={{ marginBottom: "1rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex justify-between items-center">
                  {value.title}
                  <HiChevronDown
                    className="text-gray-500"
                    style={{
                      transform:
                        expandedIndex === index ? "rotate(180deg)" : "",
                    }}
                  />
                </h3>
                {expandedIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {value.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
