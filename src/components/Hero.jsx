import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function Hero() {
  const carouselRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleCarouselChange = (index, total) => {
    if (index === total - 1) {
      carouselRef.current && carouselRef.current.next();
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+5493424085669"; // Número de WhatsApp
    const message = encodeURIComponent(
      "¡Hola desde Permol! ¿Cómo podemos ayudarte?"
    ); // Mensaje predefinido
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
    },
  };

  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.8, ease: "easeInOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="hero" className="relative text-white overflow-hidden">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            ref={carouselRef}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000} // Intervalo de 3 segundos
            className="h-full"
            onChange={handleCarouselChange}
            disabled={!inView}
          >
            {/* Slide 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <img
                src={image1}
                alt="Slide 1"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 transition-opacity duration-1000">
                <motion.h1
                  variants={titleVariants}
                  initial="hidden"
                  animate={inView ? "visible" : ""}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
                >
                  Bienvenidos a PerMol
                </motion.h1>
                <motion.p
                  variants={descriptionVariants}
                  initial="hidden"
                  animate={inView ? "visible" : ""}
                  className="text-lg md:text-xl lg:text-2xl mb-8 tracking-wider text-center"
                >
                  Nos especializamos en la gestión estratégica de Recursos
                  Humanos
                </motion.p>
              </div>
            </motion.div>

            {/* Slide 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <img
                src={image2}
                alt="Slide 2"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 transition-opacity duration-1000">
                <motion.p
                  variants={descriptionVariants}
                  initial="hidden"
                  whileHover="hover" // Aplicar la variante de hover al hacer hover
                  animate={inView ? "visible" : ""}
                  className="text-lg md:text-2xl lg:text-3xl font-bold mb-8 text-center tracking-wider" // Ajuste del tamaño de la fuente
                >
                  “Solo estaremos al nivel que demanda <br />
                  un mercado exigente y cambiante, <br />
                  si logramos empoderar a nuestro equipo <br /> invitándolos a
                  superarse día a día.”
                </motion.p>
              </div>
            </motion.div>

            {/* Slide 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <img
                src={image3}
                alt="Slide 3"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 transition-opacity duration-1000">
                <motion.p
                  variants={descriptionVariants}
                  initial="hidden"
                  whileHover="hover" // Aplicar la variante de hover al hacer hover
                  animate={inView ? "visible" : ""}
                  className="text-lg md:text-2xl lg:text-3xl font-bold mb-8 text-center tracking-wider" // Ajuste del tamaño de la fuente y negrita
                >
                  <strong>
                    Para tomar las mejores decisiones <br /> y gestionar de
                    forma correcta <br />
                    los Recursos Humanos... <br /> <br />
                    ¡Trabajemos juntos!
                  </strong>
                </motion.p>
                <motion.div
                  variants={descriptionVariants}
                  initial="hidden"
                  animate={inView ? "visible" : ""}
                  className="w-full flex justify-center mt-4"
                >
                  <button
                    className="bg-blue-600 px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl rounded hover:bg-blue-700"
                    onClick={handleWhatsAppClick}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                    Contactanos por WhatsApp
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
