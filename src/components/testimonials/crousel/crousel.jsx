import './Carousel.css';
import React, { useState } from 'react';
import CrouselData from './CrouselData';
import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";


function Carousel() {
 // State to track the index of the active slide
 const [activeIndex, setActiveIndex] = useState(0);

 // Function to go to a specific slide by index
 const goToSlide = (index) => {
   setActiveIndex(index);
 };

 // Function to go to the previous slide
 const goToPrevSlide = () => {
   const index = (activeIndex - 1 + CrouselData.data.length) % CrouselData.data.length;
   setActiveIndex(index >= 0 ? index : CrouselData.data.length - 1);
 };

 // Function to go to the next slide
 const goToNextSlide = () => {
   const index = (activeIndex + 1) % CrouselData.data.length;
   setActiveIndex(index);
 };

 // Calculate the transformation value for slide animation
 const transformValue = -activeIndex * (100 / CrouselData.data.length) + '%';

  return (
    <div className='crousel-component'>
    <div className="crousel">
      <div className="mainContainer" style={{ transform: `translateX(${transformValue})` }}>
        {CrouselData.data.map((data, index) => (
          <CarouselItem key={data.id} data={data} />
        ))}
      </div>

      <div className="navButtons">
        <button className="prev-btn" onClick={goToPrevSlide}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={goToNextSlide}>
          <FaChevronRight/>
        </button>
      </div>

      <CarouselDots totalSlides={CrouselData.data.length} activeIndex={activeIndex} goToSlide={goToSlide} />
    </div>
    </div>
  );
}

export default Carousel;
