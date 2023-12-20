import React from 'react';

function CarouselDots({ totalSlides, activeIndex, goToSlide }) {
  const dots = Array.from({ length: totalSlides }, (_, index) => (
    <span
      key={index}
      className={`dot ${index === activeIndex ? 'active' : ''}`}
      onClick={() => goToSlide(index)}
    ></span>
  ));

  return <div className="dots">{dots}</div>;
}

export default CarouselDots;
