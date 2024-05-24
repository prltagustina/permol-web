import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function Hero() {
  const carouselRef = useRef(null);

  const handleCarouselChange = (index, total) => {
    if (index === total - 1) {
      carouselRef.current && carouselRef.current.next();
    }
  };

  return (
    <section id="hero" className="relative text-white">
      <Carousel
        ref={carouselRef}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="h-full"
        onChange={handleCarouselChange}
      >
        <div className="relative h-full">
          <img
            src={image1}
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bienvenidos a Permol
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Nos especializamos en encontrar el talento perfecto para tu
              empresa
            </p>
            <div className="absolute bottom-24 left-0 right-0 text-center">
              <button className="bg-blue-600 px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded hover:bg-blue-700">
                Contactanos
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src={image2}
            alt="Slide 2"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <p className="text-lg md:text-xl mb-8">
              “Solo estaremos al nivel que demanda <br />
              un mercado exigente y cambiante, <br />
              si logramos empoderar a nuestro equipo <br /> invitándolos a
              superarse día a día."
            </p>
          </div>
          <div className="absolute bottom-24 left-0 right-0 text-center">
            <button className="bg-blue-600 px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded hover:bg-blue-700">
              Contactanos
            </button>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src={image3}
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <p className="text-lg md:text-xl mb-8">
              Para tomar las mejores decisiones <br /> y gestionar de forma
              correcta <br />
              los Recursos Humanos... <br /> <br />
              ¡Trabajemos juntos!
            </p>
          </div>
          <div className="absolute bottom-24 left-0 right-0 text-center">
            <button className="bg-blue-600 px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded hover:bg-blue-700">
              Contactanos
            </button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Hero;
