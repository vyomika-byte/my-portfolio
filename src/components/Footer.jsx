import React from 'react';
import '../styles/Footer.css';
import Circle from '../assets/circle.svg'; // Your brush stroke SVG
import Flower1 from '../assets/flower1.svg';
import Flower2 from '../assets/flower2.svg';
import Flower3 from '../assets/flower3.svg';
import Flower4 from '../assets/flower4.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-circle">
        
            <img src={Circle} alt="Circle" className="circle-img" />
        
        <div className="footer-text">Let's Talk</div>

        {/* Flower SVGs with animation */}
        <img src={Flower1} alt="Flower1" className="flower flower1" />
        <img src={Flower2} alt="Flower2" className="flower flower2" />
        <img src={Flower3} alt="Flower3" className="flower flower3" />
        <img src={Flower4} alt="Flower4" className="flower flower4" />
      </div>
    </footer>
  );
};

export default Footer;
