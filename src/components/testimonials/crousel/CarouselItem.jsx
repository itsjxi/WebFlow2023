import React from 'react';

function CarouselItem({ data, isActive }) {
  return (
    <div className={`slider ${isActive ? 'active' : ''}`}>
      <div className="content-box">
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
