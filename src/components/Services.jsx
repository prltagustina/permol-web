import React from "react";
import { motion } from "framer-motion";
import Icono1 from "../assets/icons/icono1.png";
import Icono2 from "../assets/icons/icono2.png";
import Icono3 from "../assets/icons/icono3.png";
import Icono4 from "../assets/icons/icono4.png";
import Icono5 from "../assets/icons/icono5.png";
import Icono6 from "../assets/icons/icono6.png";
import Icono7 from "../assets/icons/icono7.png";
import Icono8 from "../assets/icons/icono8.png";
import Icono9 from "../assets/icons/icono9.png";

const services = [
  {
    icon: Icono9,
    title: "Gestión de legajos",
    description:
      "Asesoramiento y control de información para la generación de legajo personal y liquidación de haberes.",
  },
  {
    icon: Icono4,
    title: "Perfiles de colaboradores",
    description:
      "Armado de perfiles de puestos de cada colaborador, para evaluar la idoneidad y detectar futuras necesidades de capacitación.",
  },
  {
    icon: Icono5,
    title: "Control de ausentismo",
    description:
      "Brindamos control y seguimiento para generar una eficiencia óptima en un tema delicado como el ausentismo diario por parte de los colaboradores.",
  },
  {
    icon: Icono6,
    title: "Reclutamiento especializado",
    description:
      "Reclutamos y seleccionamos personal para puestos vacantes dentro de la organización, encontrando a los mejores candidatos para tus necesidades.",
  },
  {
    icon: Icono3,
    title: "Gestión de relaciones laborales",
    description:
      "Presentación de documentación en entidades oficiales como AFIP, Ministerio de Trabajo, Obras Sociales y Sindicatos.",
  },
  {
    icon: Icono7,
    title: "Desvinculación laboral asistida",
    description:
      "Programa integral para comunicar de manera oportuna una desvinculación laboral.",
  },
  {
    icon: Icono1,
    title: "Evaluación de desempeño",
    description:
      "Ejecución de evaluación de desempeño basada en la gestión por competencias, vinculada a la misión, visión y valores de la institución.",
  },
  {
    icon: Icono8,
    title: "Políticas de RRHH",
    description:
      "Creación de políticas para el área de RRHH, con el fin de realizar una gestión interna y transmitir la filosofía de la organización a todos los niveles.",
  },
  {
    icon: Icono2,
    title: "Manuales internos",
    description:
      "Elaboración de manuales disciplinarios para el personal interno de la organización.",
  },
];

const animationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  viewport: { once: true },
};

const ServiceItem = ({ icon, title, description, delay }) => (
  <motion.div
    className="service bg-white p-6 shadow-md rounded flex flex-col items-start"
    initial={animationProps.initial}
    whileInView={animationProps.whileInView}
    transition={{ ...animationProps.transition, delay }}
    viewport={animationProps.viewport}
  >
    <img src={icon} className="h-16 w-16 mb-4 mx-auto" alt={`Icono ${title}`} />
    <div className="text-left w-full">
      <motion.h3
        className="text-lg font-bold mb-2 text-center"
        initial={animationProps.initial}
        whileInView={animationProps.whileInView}
        transition={{ ...animationProps.transition, delay: delay + 0.1 }}
        viewport={animationProps.viewport}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-sm"
        initial={animationProps.initial}
        whileInView={animationProps.whileInView}
        transition={{ ...animationProps.transition, delay: delay + 0.2 }}
        viewport={animationProps.viewport}
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-left mb-8"
          initial={animationProps.initial}
          whileInView={animationProps.whileInView}
          transition={animationProps.transition}
          viewport={animationProps.viewport}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Descubre lo que ofrecemos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluciones en Recursos Humanos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Desarrollamos una gama integral de servicios en recursos humanos,
            adaptados a empresas de todos los tamaños.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
