import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-banner">
        <h1>Got a Project in Mind?<br /> Let's Connect.</h1>
        <p>Currently seeking summer internship opportunities and freelance projects to apply my design and development skills. I'm excited to collaborate on meaningful work that challenges me to grow.</p>
      </div>

      <div className="contact-info">
        <p>Email <a href="mailto:vyomika2206@gmail.com">vyomika2206@gmail.com</a></p>
        <p>or message me on <a href="https://www.linkedin.com/in/vyomika-tech" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
  );
}

export default Contact;
