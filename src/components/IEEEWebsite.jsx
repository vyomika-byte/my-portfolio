import React from 'react';
import '../styles/IEEEWebsite.css';
import ieeeThumbnail from '/images/ieee_thumbnail.png'; // adjust path if needed

const IEEEWebsite = () => {
  return (
    <div className="ieee-container">
      {/* Header Section */}
      <section className="ieee-header">
        <h1>IEEE NITJ Student Chapter Website</h1>
        <p className="ieee-role">
          <em>Role: UI/UX Designer<br /> (Oct 2024 - Present)</em>
        </p>
      </section>

      {/* Project Overview */}
      <section className="ieee-section">
        <h2>Project Overview</h2>
        <p>
          The IEEE Student Chapter at NIT Jalandhar is a newly established community aimed at fostering
          professional growth, technical excellence, and impactful contributions to society. The website serves as
          the digital face of the chapter, designed to:
        </p>
        <ul>
          <li>Establish a strong online presence for the new chapter.</li>
          <li>Create awareness among students, faculty, and external collaborators.</li>
          <li>Reflect a modern, tech-savvy vibe appealing to college students and potential sponsors.</li>
        </ul>
      </section>

      {/* Goals & Objectives */}
      <section className="ieee-section">
        <h2>Goals & Objectives</h2>
        <p>To be updated soon.</p>
      </section>

      {/* Key Features */}
      <section className="ieee-section">
        <h2>Key Features</h2>
        <div className="ieee-grid">
          <div className="ieee-card"><strong>Responsive Design:</strong> Ensures optimal viewing across devices.</div>
          <div className="ieee-card"><strong>Event & News Sections:</strong> Dynamic sections to keep members informed.</div>
          <div className="ieee-card"><strong>Gallery:</strong> Showcases past events and activities.</div>
          <div className="ieee-card"><strong>Committee Page:</strong> Introduces the team behind the chapter.</div>
          <div className="ieee-card"><strong>Contact Form:</strong> Facilitates communication with interested parties.</div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="ieee-section">
        <h2>Challenges & Learnings</h2>
        <p><strong>Challenge:</strong> Balancing the need for a modern design with the formal branding guidelines of IEEE.</p>
        <p><strong>Solution:</strong> Maintained IEEE’s branding elements while introducing contemporary design trends to appeal to the student demographic.</p>
        <p><strong>Learning:</strong> Gained experience in building scalable, maintainable codebases and the importance of user-centric design.</p>
      </section>

      {/* Impact & Future Plans */}
      <section className="ieee-section">
        <h2>Impact & Future Plans</h2>
        <p><strong>Immediate Impact:</strong> Establishes a centralized platform for the chapter's activities, enhancing visibility and engagement.</p>
        <p><strong>Future Enhancements:</strong></p>
        <ul>
          <li>Integration with IEEE’s global events calendar.</li>
          <li>Member login for personalized content.</li>
          <li>Blog section for technical articles and tutorials.</li>
        </ul>
      </section>

      {/* Thumbnail and Live Link */}
      <section className="ieee-thumbnail-section">
        <img src={ieeeThumbnail} alt="IEEE Website Thumbnail" className="ieee-thumbnail" />
        <a
          href="https://your-live-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ieee-button"
        >
          Live Website
        </a>
      </section>
    </div>
  );
};

export default IEEEWebsite;
