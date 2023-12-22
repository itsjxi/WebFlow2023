import React, { useState, useEffect } from 'react';

function CarouselItem({ data, isActive }) {
  const [addColor, setAddColor] = useState(false);

  //on resizing when we are changing our view to mobile 
  // each div conetentbox has the differnt color and we are picking color direct;y from data 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 745) {
        setAddColor(true);
      } else {
        setAddColor(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`slider ${isActive ? 'active' : ''}`}>
      <div className="content-box" style={addColor ? { backgroundColor: data.color } : {}}>
        <div className="heading">{data.heading}</div>
        <div className="paragraph">{data.paragraph}</div>
        <div className="name">{data.name}</div>
        <div className="designation">{data.designation}</div>
      </div>

      <div className="image-box">
        <img src={data.image} alt="image" width={500} height={400} />
      </div>
    </div>
  );
}

export default CarouselItem;
