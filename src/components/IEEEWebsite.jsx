import React, { useEffect, useRef } from 'react';
import '../styles/IEEEWebsite.css';

import designImg1 from '/images/design1.png'; 
import designImg2 from '/images/design2.png'; 
import designImg3 from '/images/design3.png'; 
import ieee1 from '/images/IEEE1.png'; 
import ieee2 from '/images/IEEE2.png'; 
import ieee3 from '/images/IEEE3.png'; 
import ieee4 from '/images/IEEE4.png';
import ieee5 from '/images/IEEE5.png';
import ieee6 from '/images/IEEE6.png'; 

const IEEEWebsite = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Duplicate images for seamless loop
    const images = Array.from(carousel.children);
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      carousel.appendChild(clone);
    });

    let scrollAmount = 0;
    const scrollStep = 1;

    function autoScroll() {
      scrollAmount += scrollStep;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }, []);

  const scrollLeft = () => {
    const carousel = document.getElementById('carousel');
    if (carousel) carousel.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const carousel = document.getElementById('carousel');
    if (carousel) carousel.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div className="ieee-container">
      {/* HEADER */}
      <section className="ieee-header">
        <h1>IEEE NITJ Student Chapter Website</h1>
        <p className="ieee-role">
          <em>Role: UI/UX Designer<br /> (Oct 2024 - Present)</em>
        </p>
      </section>

      {/* OVERVIEW */}
      <h2 className="ieee-heading">Project Overview</h2>
      <section className="ieee-section">
        <p>
          The IEEE Student Chapter at NIT Jalandhar is a newly established community aimed at fostering
          professional growth, technical excellence, and impactful contributions to society...
        </p>
        <ul>
          <li>Establish a strong online presence for the new chapter.</li>
          <li>Create awareness among students, faculty, and external collaborators.</li>
          <li>Reflect a modern, tech-savvy vibe appealing to college students and potential sponsors.</li>
        </ul>
      </section>

      {/* DESIGN PROCESS */}
      <h2 className="ieee-heading">Design Process</h2>
      <section className="ieee-section2">
        <div className="ieee-design-wrapper">
          <div className="ieee-design-left">
            <ol className="ieee-process-steps">
              <li><strong>Research:</strong> Analyzed IEEE websites.</li>
              <li><strong>Wireframing:</strong> Low-fidelity flows.</li>
              <li><strong>Designs:</strong> Clean & modern aesthetic.</li>
              <li><strong>Prototyping:</strong> Test and feedback.</li>
              <li><strong>Development:</strong> React.js & Tailwind CSS.</li>
            </ol>
          </div>
          <div className="ieee-design-carousel">
            <img src={designImg1} alt="Design 1" />
            <img src={designImg2} alt="Design 2" />
            <img src={designImg3} alt="Design 3" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <h2 className="ieee-heading">Key Features</h2>
      <section className="ieee-section">
        <div className="ieee-grid">
          <div className="ieee-card"><strong>Responsive:</strong> Works on all devices.</div>
          <div className="ieee-card"><strong>Dynamic Content:</strong> Events & news.</div>
          <div className="ieee-card"><strong>Gallery:</strong> Past activities.</div>
          <div className="ieee-card"><strong>Team:</strong> Committee page.</div>
          <div className="ieee-card"><strong>Contact:</strong> Easy inquiries.</div>
        </div>
      </section>
      {/* CHALLENGES AND LEARNINGS */}
      <h2 className="ieee-heading">Challenges & Learnings</h2>
      <section className="ieee-challenges">
        <div className="ieee-challenges-wrapper">
          <div className="ieee-challenge-box">
            <strong>Challenge:</strong> Balancing the need for a modern design with the formal branding guidelines of IEEE.
          </div>
          <div className="ieee-solution-box">
            <strong>Solution:</strong> Maintained IEEE's branding elements while introducing contemporary design trends to appeal to the student demographic.
          </div>
        </div>

        <p className="ieee-learning">
          <strong>Learning:</strong> Gained experience in building scalable, maintainable codebases and the importance of user-centric design.
        </p>
      </section>


      {/* IMPACT */}
      <h2 className="ieee-heading">Impact & Future Plans</h2>
      <section className="ieee-section">
        <p><strong>Immediate Impact:</strong> Centralized platform.</p>
        <p><strong>Future:</strong></p>
        <ul>
          <li>IEEE global events calendar</li>
          <li>Member login</li>
          <li>Blog section</li>
        </ul>
      </section>

      {/* IMAGE CAROUSEL */}
      <section className="ieee-photos">
        <div className="ieee-carousel-container">
          

          <div className="ieee-design-carousel-wrapper">
            <div className="ieee-carousel-wrapper">
              <div className="ieee-design-carousel2" ref={carouselRef} id="carousel">
                <img src={ieee1} alt="IEEE1" />
                <img src={ieee2} alt="IEEE2" />
                <img src={ieee3} alt="IEEE3" />
                <img src={ieee4} alt="IEEE4" />
                <img src={ieee5} alt="IEEE5" />
                <img src={ieee6} alt="IEEE6" />
              </div>
            </div>
          </div>

          
        </div>

        <div className="ieee-button-wrapper">
          <a
            href="https://ieeenitj.vercel.app/#"
            target="_blank"
            rel="noopener noreferrer"
            className="ieee-button"
          >
            Live Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default IEEEWebsite;
