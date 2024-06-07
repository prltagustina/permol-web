import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CustomCarousel() {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      className="mb-8"
    >
      <div className="relative">
        <img
          src="/path/to/your/image1.jpg"
          alt="Slide 1"
          className="object-cover w-full h-64 md:h-96 lg:h-128"
        />
        <p className="legend absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center p-4">
          Slide 1
        </p>
      </div>
      <div className="relative">
        <img
          src="/path/to/your/image2.jpg"
          alt="Slide 2"
          className="object-cover w-full h-64 md:h-96 lg:h-128"
        />
        <p className="legend absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center p-4">
          Slide 2
        </p>
      </div>
      <div className="relative">
        <img
          src="/path/to/your/image3.jpg"
          alt="Slide 3"
          className="object-cover w-full h-64 md:h-96 lg:h-128"
        />
        <p className="legend absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center p-4">
          Slide 3
        </p>
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
