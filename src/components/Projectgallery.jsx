import { useState } from "react";
import '../styles/ProjectGallery.css';

const images = [
  "/images/app1.png",
  "/images/app2.png",
  "/images/app3.png",
  "/images/app4.png",
  "/images/app5.png",
  "/images/app6.png", 
  "/images/app7.png",
  "/images/app8.png",
  "/images/app9.png",
  "/images/app10.png",
  "/images/app11.png",
  "/images/app12.png",
  "/images/app13.png",
  "/images/app14.png",
];

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 1
    );
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="project-gallery-wrapper">
      <h2 className="gallery-heading">Project Gallery</h2>
      
      <div className="carousel-wrapper">
        <button className="nav-button left" onClick={handlePrev}>‹</button>
        
        <div className="carousel-container">
          {getVisibleImages().map((src, idx) => (
            <div className="carousel" key={idx}>
              <img src={src} alt={`App Screen ${currentIndex + idx + 1}`} />
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default ProjectGallery;
