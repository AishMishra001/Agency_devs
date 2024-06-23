import React, { useState, useEffect } from 'react';
import './slider2.css';

import Video1 from '../../../assets/GameDev/Video1.mp4'; 
import Video2 from '../../../assets/GameDev/Video2.mp4'; 
import Video3 from '../../../assets/GameDev/Video3.mp4'; 

const HexagonSlider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const media = [
    
    { type: 'video', src: Video1 }, 
    { type: 'video', src: Video2 }, 
    { type: 'video', src: Video3 }, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [media.length]);

  return (
    <div className="hexagon-slider">
      <div
        className="hexagon-container"
        style={{ transform: `rotateY(-${currentIndex * 30}deg)` }}
      >
        {media.map((item, index) => (
          <div key={index} className={`hexagon face-${index}`}>
            {item.type === 'image' ? (
              <div
                style={{ backgroundImage: `url(${item.src})` }}
              ></div>
            ) : (
              <video autoPlay loop muted className="hexagon-video">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSlider2;
