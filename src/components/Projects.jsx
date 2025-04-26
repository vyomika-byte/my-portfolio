import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-divider"></div>
      <section className="projects-section">
        {/* Website Design Section */}
        <div className="category" id="website-design">
          <div className="category-content">
            <h2 className="category-heading" >Website Design</h2>
            <div className="cards-row">
              <a href="/ieee-website" className="project-card">
                <img src="/images/ieee_thumbnail.png" alt="IEEE Website" />
                <p>IEEE NITJ Student Chapter Website</p>
              </a>
              <a href="/hackniti" className="project-card">
                <img src="/images/hackmol_thumbnail.png" alt="Hackmol 6.0 Website" />
                <p>Hackmol 6.0 GDGC Website</p>
              </a>
              <a href="/gdsc-nitj" className="project-card">
                <img src="/images/gdgc_thumbnail.png" alt="GDSC Website" />
                <p>GDSC NITJ Website</p>
              </a>
            </div>
          </div>
          <div className="description-container">
            <p className="category-description">
              Designing calm, intuitive spaces that feel like home on the internet.
            </p>
          </div>
        </div>

        {/* App Design Section */}
        <div className="category" id="app-design">
          <div className="category-content">
            <h2 className="category-heading" >App Design</h2>
            <div className="cards-row">
              <a href="/zindagi-go" className="project-card">
                <img src="/images/zindagigo_thumbnail.png" alt="Zindagi Go - App" />
                <p>Zindagi Go - App For elderly</p>
              </a>
            </div>
          </div>
          <div className="description-container">
            <p className="category-description">
              Creating seamless, human-centered apps that quietly solve real problems.
            </p>
          </div>
        </div>

        {/* Graphic Design Section */}
        <div className="category" id="graphic-design">
          <div className="category-content">
            <h2 className="category-heading" >Graphic Design</h2>

            {/* Posters & Banners */}
            <div className="design-category">
              <h3 className="design-title">Posters & Banners</h3>
              <div className="design-row">
                <div className="design-card">
                  <img src="/assets/poster1.jpg" alt="Banner: xyz" />
                  <p>Banner: xyz</p>
                </div>
              </div>
            </div>

            {/* Social Media Creatives */}
            <div className="design-category">
              <h3 className="design-title">Social Media Creatives</h3>
              <div className="design-row">
                <div className="design-card">
                  <img src="/assets/social1.jpg" alt="Post: xyz" />
                  <p>Post: xyz</p>
                </div>
              </div>
            </div>

            {/* Event Branding */}
            <div className="design-category">
              <h3 className="design-title">Event Branding</h3>
              <div className="design-row">
                <div className="design-card">
                  <img src="/assets/event1.jpg" alt="E2ACON" />
                  <p>E2ACON</p>
                </div>
              </div>
            </div>
          </div>

          <div className="description-container">
            <p className="category-description">
              I bring ideas to life through bold, intentional visuals—whether it’s a poster that speaks loud 
              without shouting, or branding that captures a story in a single glance. I design to connect, 
              captivate, and leave a lasting impression.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
