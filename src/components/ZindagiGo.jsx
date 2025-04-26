import React from "react";
import "../styles/ZindagiGo.css";
import HeroImage from "/images/zindagigo1.png"; // <-- replace with correct path
import heart from "/images/heart.png"; // <-- replace with correct path

const ZindagiGo = () => {
  return (
    <div className="zindagi-page">
      <div className="hero-section">
        <div className="hero-image">
          <img src={HeroImage} alt="Zindagi Go Logo" />
        </div>
        <div className="hero-text">
          <h1>ZINDAGI GO</h1>
          <p>
            An intuitive companion app empowering the elderly to live
            independently, safely, and joyfully.
          </p>
        </div>
      </div>

      <div className="page-background">
        <div className="overview-section">
          <div className="overview-left">
            <h2>Overview</h2>
            <p>
              Zindagi Go is a mobile application designed to bridge the gap between
              technology and the elderly. By combining clear functionality with
              emotional sensitivity, the app supports day-to-day living with features
              like medication reminders, health tracking, SOS emergency help,
              entertainment, financial management, and community engagement — all
              tailored for effortless use.
            </p>
          </div>

          <div className="overview-right">
            <h3>My Role</h3>
            <p>
              UI/UX Designer — responsible for end-to-end user experience, interface
              design, typography, color system, iconography, usability testing, and
              iterative improvements.
            </p>

            <h3>Tools Used</h3>
            <ul>
              <li>Figma (Wireframing, Prototyping)</li>
              <li>Adobe Illustrator (Icon Design, SVGs)</li>
              <li>React Native (in collaboration with the development team)</li>
            </ul>
          </div>
        </div>

        <div className="problem-solution-section">
          <div className="problem-box">
            <h2>Problem</h2>
            <p>
              Older adults often face technological barriers that limit their independence. Complex interfaces, overwhelming options, and a lack of personalization make many apps difficult to use. They need simple, trustworthy, emotionally intelligent tools that respect their autonomy without making them feel dependent.
            </p>
          </div>

          <div className="arrow">
            <img src="/images/arrow.svg" alt="Arrow" />
          </div>

          <div className="solution-box">
            <h2>Solution</h2>
            <h3>Zindagi Go was built to be:</h3>
            <p>
              Simple, with a highly readable layout and minimal cognitive load.
              Empowering, giving users control over their health, activities, and safety.
              Emotionally intelligent, fostering confidence, connection, and independence.
              Secure, with sensitive features (like banking) designed with privacy-first thinking.
            </p>
          </div>
        </div>

        <div className="key-features-section">
          <h2 className="key-features-title">Key Features:</h2>

          <div className="features-scroll">
            {/* 7 feature cards */}
            <div className="feature-card">
              <h3>Medication Reminders</h3>
              <p>Set up daily or weekly medicine schedules with clear, non-intrusive alerts.</p>
            </div>

            <div className="feature-card">
              <h3>Health Tracker</h3>
              <p>Monitor sleep, step counts, and vital records — presented visually and simply.</p>
            </div>

            <div className="feature-card">
              <h3>Emergency SOS</h3>
              <p>Voice-activated SOS that instantly notifies pre-set emergency contacts.</p>
            </div>

            <div className="feature-card">
              <h3>Dual Accounts (Elder + Caregiver)</h3>
              <p>Caregivers can assist without accessing private features like finances.</p>
            </div>

            <div className="feature-card">
              <h3>Financial Dashboard</h3>
              <p>Hidden banking tracker for pensions and savings, designed for security and ease.</p>
            </div>

            <div className="feature-card">
              <h3>Entertainment Hub</h3>
              <p>News, cooking videos, memory games, and hobby content, curated for seniors.</p>
            </div>

            <div className="feature-card">
              <h3>Personalized Interface</h3>
              <p>Adjustable font sizes, a high-contrast mode, multilingual chatbot, and accessibility tools like screen zoom and flashlight.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ZindagiGo;
