import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCategories from './components/ProjectCategories';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import IEEEWebsite from './components/IEEEWebsite';
import ZindagiGo from './components/ZindagiGo';
// Placeholder pages

const HacknitiWebsite = () => <div>Hackniti Website Details Coming Soon!</div>;
const GDSCWebsite = () => <div>GDSC Website Details Coming Soon!</div>;

function App() {
  return (
    <>
      <Navbar />
      
      {/* These are the sections for your homepage */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ieee-website" element={<IEEEWebsite />} />
        <Route path="/hackniti" element={<HacknitiWebsite />} />
        <Route path="/gdsc-nitj" element={<GDSCWebsite />} />
        <Route path="/zindagi-go" element={<ZindagiGo />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}


function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectCategories />
        <Projects />
      </section>
      
        <Footer />
      
    </>
  );
}

export default App;
