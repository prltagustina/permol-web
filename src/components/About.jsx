import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imagenPerfil from "../assets/imagen-perfil.jpg";

const imageAnimationProps = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const textAnimationProps = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const staggeredTextAnimationProps = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut", delay },
});

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 bg-gray-100 px-4" ref={ref}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <motion.img
          src={imagenPerfil}
          alt="Imagen de perfil"
          className="h-48 lg:h-64 w-48 lg:w-64 rounded-full mb-8 lg:mb-0 lg:mr-12"
          initial={imageAnimationProps.initial}
          animate={inView ? imageAnimationProps.animate : "hidden"}
          transition={imageAnimationProps.transition}
        />
        <motion.div
          className="text-left max-w-prose lg:pl-12"
          initial={textAnimationProps.initial}
          animate={inView ? textAnimationProps.animate : "hidden"}
          transition={textAnimationProps.transition}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4 text-blue-400" // Ajusta el tamaño y color del título
            initial={staggeredTextAnimationProps(0).initial}
            animate={inView ? staggeredTextAnimationProps(0).animate : "hidden"}
            transition={staggeredTextAnimationProps(0).transition}
          >
            Sobre nosotros
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg leading-relaxed mb-4"
            initial={staggeredTextAnimationProps(0.2).initial}
            animate={
              inView ? staggeredTextAnimationProps(0.2).animate : "hidden"
            }
            transition={staggeredTextAnimationProps(0.2).transition}
          >
            Soy Santiago Peralta, especializado en Consultoría Empresarial
            enfocada en el desarrollo del talento humano.
          </motion.p>
          <motion.p
            className="text-base lg:text-lg leading-relaxed mb-4"
            initial={staggeredTextAnimationProps(0.4).initial}
            animate={
              inView ? staggeredTextAnimationProps(0.4).animate : "hidden"
            }
            transition={staggeredTextAnimationProps(0.4).transition}
          >
            Con títulos de Técnico Superior en Gestión Empresarial y Técnico
            Superior en Administración de Personal, estoy próximo a finalizar la
            Licenciatura en Gestión de Recursos Humanos.
          </motion.p>
          <motion.p
            className="text-base lg:text-lg leading-relaxed mb-4"
            initial={staggeredTextAnimationProps(0.6).initial}
            animate={
              inView ? staggeredTextAnimationProps(0.6).animate : "hidden"
            }
            transition={staggeredTextAnimationProps(0.6).transition}
          >
            Tengo experiencia en diversas áreas clave, como la administración de
            personal, evaluaciones de rendimiento, elaboración de manuales
            internos y selección de talento.
          </motion.p>
          <motion.p
            className="text-base lg:text-lg leading-relaxed"
            initial={staggeredTextAnimationProps(0.8).initial}
            animate={
              inView ? staggeredTextAnimationProps(0.8).animate : "hidden"
            }
            transition={staggeredTextAnimationProps(0.8).transition}
          >
            Mi objetivo es ofrecer soluciones personalizadas para fortalecer las
            relaciones laborales y garantizar una administración eficiente,
            impulsando el crecimiento y éxito continuo de tu empresa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
