"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

const ResponsiveSlider = ({ images = [] }) => {
  if (images.length === 0) {
    return <p className="text-gray-500 text-center">No images available</p>;
  }

  return (
    <Carousel showArrows={true} showThumbs={true} autoPlay={true} infiniteLoop={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="object-cover" />
          {/* <p className="legend">Image {index + 1}</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveSlider;
