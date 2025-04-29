import React from "react";
import "../styles/E2ACON.css";
import logo from "/images/e2a1.png"; 
import heroImage from "/images/e2a2.png";


const images = [
  "/images/e2acong1.jpg",
  "/images/e2acong2.jpg",
  "/images/e2acong3.jpg",
  "/images/e2acong4.jpg",
  "/images/e2acong5.jpg",
  "/images/e2acong6.JPG",
  "/images/e2acong7.JPG",
  // Add more photos if needed
];

const E2ACON = () => {
    return (
      <div className="e2acon-container">
        <div className="e2acon-box">
          <div className="e2acon-hero-section">
            <div className="e2acon-text-group">
              <div className="e2acon-inline-heading">
                <span className="e2acon-black">E2ACON</span>
                <span className="e2acon-blue">2025</span>
              </div>
              <p className="e2acon-tagline">Event branding and organization</p>
            </div>
            <img src={logo} alt="E2ACON Logo" className="e2acon-logo" />
          </div>

          <div className="e2acon-image-wrapper">
            <img src={heroImage} alt="E2ACON Hero" className="e2acon-hero-image" />
          </div>

          {/* Project Overview STARTS HERE, INSIDE e2acon-box */}
          
          <section className="project-overview">
            <h2 className="project-title">Project Overview</h2>

            <div className="box-container">
              {/* Box 1 - Labels */}
              <div className="box box1">
                <p>Role<br />Client<br />Year<br />Task</p>
              </div>

              {/* Box 2 - Details */}
              <div className="box box2">
                <p>
                  Lead Designer & Event Organizer<br />
                  Dr. B R Ambedkar National Institute of Technology Jalandhar (NITJ)<br />
                  2025<br />
                  Visual Identity, Print Collateral, On-site Branding, Event Coordination
                </p>
              </div>

              {/* Box 3 - Conference Description */}
              <div className="box box3">
                <p>
                  E2ACON 2024, the International Conference on Electrical, Electronics, and Automation, hosted by NITJ,
                  served as a global platform for researchers, engineers, educators, and industry professionals to exchange ideas
                  and innovations. With the theme “Sustainable Development: The Foundation of a Viksit Bharat,” the conference
                  emphasized the role of advanced technologies in driving sustainable growth and supporting India’s vision
                  of becoming a developed nation.
                </p>
              </div>
            </div>

            {/* Big paragraph below */}
            <div className="overview-description">
              <p>
                As the Lead Designer and an Organizer, I was responsible for crafting a cohesive visual identity
                that resonated with the conference's theme. This encompassed designing a range of materials, including:
              </p>
              <ul className="material-list">
                <li>Event banners and posters</li>
                <li>Souvenir book cover</li>
                <li>Slip pad cover</li>
                <li>Lunch coupons</li>
                <li>Standees</li>
              </ul>
              <p>
                Beyond design, I played a pivotal role in coordinating the production and timely deployment of these materials,
                ensuring a seamless visual experience throughout the event.
              </p>
            </div>
          </section>

          
          {/* Project Overview ENDS HERE */}
          <section className="masonry-grid">
            <img src="/images/banner1.png" class="horizontal" />
            <img src="/images/banner2.png" class="horizontal" />
            <img src="/images/banner3.png" class="horizontal" />
            <img src="/images/banner4.png" class="horizontal" />
            <img src="/images/banner5.png" class="horizontal" />
            <img src="/images/certificate.png" class="horizontal" />
            <img src="/images/certificate2.png" class="horizontal" />
            
            <img src="/images/vertical-banner.png" class="vertical" />
            <img src="/images/slip-pad.png" class="small-tall" />
            <img src="/images/book-cover.png" class="medium-rect" />
            <img src="/images/standee.png" class="tall-standee" />
            <img src="/images/food-coupon.png" class="small-rect" />
          </section>

          {/*design details section start here*/}
          <div className="design-details-wrapper">

            {/* Design Details Section */}
            <div className="design-details">
              <h2 className="section-heading">Design Details</h2>
              <h3 className="subheading">Color Palette:</h3>
              <div className="color-palette">
                
                <p className="body-text">
                  For the visual identity of E2ACON 2024, I primarily worked with vibrant shades of blue,
                  complemented by black and white tones. The palette was chosen to evoke a sense of innovation,
                  professionalism, and trust — aligning with the conference’s focus on sustainable technological advancement.
                </p>

                {/* Image instead of SVG code */}
                <img
                  src="/images/colore2acon.svg"
                  alt="Color Palette for E2ACON 2024"
                  className="palette-image"
                />
              </div>

              <div className="typography">
                <h3 className="subheading">Typography:</h3>
                <p className="body-text">
                  A curated mix of fonts was used to balance professionalism with creativity:
                  Inter for body text, Poppins for subheadings, Anton for bold highlights, and Averia Serif Libre
                  for elegant accents — ensuring clarity, hierarchy, and a dynamic event identity.
                </p>
              </div>
            </div>

            {/* Challenges & Learnings Section */}
            <div className="challenges-learnings">
              <h2 className="section-heading">Challenges & Learnings</h2>

              <div className="challenge-item">
                <h3 className="subheading">Leading a Design Project for the First Time:</h3>
                <p className="body-text">
                  As this was my first experience leading the complete visual branding for a major event,
                  I learned to plan, prioritize, and deliver consistently under tight deadlines.
                </p>
              </div>

              <div className="challenge-item">
                <h3 className="subheading">Balancing Academic Commitments:</h3>
                <p className="body-text">
                  Managing the demanding schedules of both college academics and event deadlines taught me critical
                  time management and multitasking skills.
                </p>
              </div>

              <div className="challenge-item">
                <h3 className="subheading">Coordinating with Teams and Vendors:</h3>
                <p className="body-text">
                  Working alongside fellow students, professors, and external vendors for printing and setup helped me
                  sharpen my communication, leadership, and problem-solving abilities.
                </p>
              </div>

              <div className="challenge-item">
                <h3 className="subheading">Maintaining Consistency Across Collateral:</h3>
                <p className="body-text">
                  Ensuring that every asset — from banners to book covers to lunch coupons — maintained a unified look and feel
                  was a key creative and organizational challenge.
                </p>
              </div>

            </div>
          

        </div> {/* design details wrapper ends here */}
        
        <div className="gallery-wrapper">
          <h2 className="section-heading">D-Day Gallery</h2>
          <div className="carousel-container">
            <div className="carousel-track">
              {images.map((src, index) => (
                <div className="carousel-item" key={index}>
                  <img src={src} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>


        <p className="e2acon-quote">
          "Seeing my designs come alive during E2ACON was incredibly fulfilling. Collaborating with faculty and managing deliverables under tight timelines strengthened both my creative and leadership skills."
        </p>
        </div> {/* e2acon-box ends here */}
      </div> 
    );
};

export default E2ACON;
