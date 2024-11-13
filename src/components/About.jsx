import React from "react"; 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <motion.div
            className="text-left max-w-prose"
            initial={textAnimationProps.initial}
            animate={inView ? textAnimationProps.animate : "hidden"}
            transition={textAnimationProps.transition}
          >
            <motion.h2
              className="text-base font-semibold leading-7 text-blue-400 font-rubik"
              initial={staggeredTextAnimationProps(0).initial}
              animate={inView ? staggeredTextAnimationProps(0).animate : "hidden"}
              transition={staggeredTextAnimationProps(0).transition}
            >
              Somos Permol
            </motion.h2>
            <motion.p
              className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-rubik"
              initial={staggeredTextAnimationProps(0.2).initial}
              animate={inView ? staggeredTextAnimationProps(0.2).animate : "hidden"}
              transition={staggeredTextAnimationProps(0.2).transition}
            >
              Especialistas en Gestión de Recursos Humanos
            </motion.p>
            <motion.p
              className="text-base lg:text-lg leading-relaxed mb-4 mt-4 font-noto"
              initial={staggeredTextAnimationProps(0.4).initial}
              animate={inView ? staggeredTextAnimationProps(0.4).animate : "hidden"}
              transition={staggeredTextAnimationProps(0.4).transition}
            >
              El objetivo de consultora Permol es brindar soluciones personalizadas, para fortalecer las relaciones laborales y garantizar una administración eficiente de los RRHH, impulsando el crecimiento y éxito continuo de tu negocio.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
