import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="flex-container-carousel">
      <div className="text-carousel flex-container-carousel-item">
        <h2> Text </h2>
      </div>
      <div className="flex-container-item">
        <div>Some image</div>
      </div>
    </div>
  );
};

export default Carousel;
