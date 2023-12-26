import React, { useState, useEffect } from 'react';
import posImage7 from '../images/123.png';
import posImage8 from '../images/SOD-BUILDING.png';
import posImage10 from '../images/campus.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    posImage7,
    posImage8,
    posImage10,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) %
slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
        data-mdb-interval="false"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index ===
activeIndex ? 'active' : ''}`}>
              <img
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button"
onClick={handlePrev}>
          <span className="carousel-control-prev-icon"
aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button"
onClick={handleNext}>
          <span className="carousel-control-next-icon"
aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;