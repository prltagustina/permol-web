import React, { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const carouselRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [showCursor, setShowCursor] = useState(false);

  const handleCarouselChange = (index) => {
    if (index === 1) {
      setShowCursor(false);
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 0.1 }}
        onAnimationComplete={() => {
          if (index === text.length - 1) {
            setShowCursor(true);
          }
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section
      id="hero"
      className="relative text-black overflow-hidden pt-16 md:pt-20 lg:pt-24"
    >
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
            interval={7000}
            className="h-full"
            onChange={handleCarouselChange}
            disabled={!inView}
          >
            {/* Slide 1 - Fondo #1c2ac4 y texto #e8d5ea */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative h-full bg-[#1c2ac4]"
              style={{ height: "80vh" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <motion.h1
                  variants={descriptionVariants}
                  initial="hidden"
                  animate={inView ? "visible" : ""}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center text-[#e8d5ea]"
                  style={{ fontFamily: "Rubik, sans-serif" }}  // Aplicar Rubik
                >
                  {splitText("Bienvenidos a PerMol")}
                  {showCursor && (
                    <motion.span
                      className="text-[#e8d5ea] animate-pulse"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.h1>
              </div>
            </motion.div>

            {/* Slide 2 - Fondo #e8d5ea y texto #1c2ac4 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full bg-[#e8d5ea] flex items-center justify-center"
            >
              <motion.p
                variants={descriptionVariants}
                initial="hidden"
                whileHover="hover"
                animate={inView ? "visible" : ""}
                className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold text-center leading-relaxed tracking-wide text-[#1c2ac4]"
                style={{ fontFamily: "Rubik, sans-serif" }}  // Aplicar Rubik
              >
                Estaremos al nivel que demanda <br />
                un mercado exigente y cambiante, <br />
                si logramos empoderar a nuestro equipo <br />
                invitándolos a superarse día a día.
              </motion.p>
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
