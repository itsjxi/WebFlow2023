import React from 'react';

//creating dots and adding the sliding fuctionality to each dot accordingly 
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
