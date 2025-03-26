import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroBg from "../assets/images/hero-bg.webp";

function Hero() {
  const carouselRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="hero"
      role="banner"
      aria-label="Sección principal de inicio"
      className="relative text-black overflow-hidden"
      style={{ touchAction: "auto", overscrollBehavior: "contain" }} // Fix para scroll en Android
    >
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div role="region" aria-label="Galería de imágenes del hero">
            <Carousel
              ref={carouselRef}
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={7000}
              className="h-full"
              swipeable={false} // Permite scroll vertical en Android
            >
              {/* Slide 1 - Imagen de fondo decorativa */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative h-full min-h-screen"
                style={{
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#1c2ac4", // Color de respaldo mientras carga la imagen
                }}
                aria-hidden="true" // Imagen decorativa, se oculta de tecnologías de asistencia
              ></motion.div>

              {/* Slide 2 - Texto animado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full bg-[#2A6CCF] flex items-center justify-center min-h-screen"
              >
                <motion.p
                  variants={descriptionVariants}
                  initial="hidden"
                  whileHover="hover"
                  animate={inView ? "visible" : "hidden"}
                  className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold text-center leading-relaxed tracking-wide text-[#E3EFFF]"
                  style={{ fontFamily: "Rubik, sans-serif" }}
                >
                  ESTAREMOS A LA ALTURA DEL MERCADO
                  <br />
                  SI EMPODERAMOS A NUESTRO EQUIPO <br />
                  INVITÁNDOLOS A SUPERARSE DÍA A DÍA.
                </motion.p>
              </motion.div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
