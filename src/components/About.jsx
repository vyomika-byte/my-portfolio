import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <>
      <div className="about-divider"></div>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Crafting Joy,<br />Coding Kindness</h2>
          <p className="about-description">
            I am driven by a purpose to design technology that genuinely improves lives — especially for those often overlooked.
            As a UI/UX designer with an engineering mindset, I strive to create thoughtful, accessible, and intuitive digital experiences.
            My passion lies in building user-first solutions that are not just functional, but meaningful. I believe in designing with empathy,
            leading with intention, and always putting people at the heart of the process.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Work</h3>
              <p>
                I am a designer who translates complex ideas into clean, user-centered designs using tools like Figma. With a background in
                Electronics and Communication Engineering from NIT Jalandhar, I bring analytical thinking and creative problem-solving to every project.
                Whether I am building healthcare platforms like MedSwap or crafting inclusive apps like Zindagi Go, I believe in designing for impact.
              </p>
            </div>

            <div className="about-card">
              <h3>Strategy</h3>
              <p>
                To me, good design starts with understanding people. I dive deep into user behavior, context, and needs to build experiences that resonate.
                My work is guided by research, intuition, and a constant drive to make technology more humane.
                I think strategically — not just about screens, but about the broader user journey and the outcomes my designs create.
              </p>
            </div>

            <div className="about-card">
              <h3>Leadership</h3>
              <p>
                Being part of communities like GDSC and Women in Tech, I have learned that collaboration fuels creativity.
                I love working with diverse teams, guiding ideas from sketch to solution, and uplifting others along the way.
                My leadership style is inclusive, empathetic, and action-oriented — I lead by listening, and I design by caring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
