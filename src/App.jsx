import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCategories from './components/ProjectCategories';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Placeholder pages
const IEEEWebsite = () => <div>IEEE Website Details Coming Soon!</div>;
const HacknitiWebsite = () => <div>Hackniti Website Details Coming Soon!</div>;
const GDSCWebsite = () => <div>GDSC Website Details Coming Soon!</div>;
const ZindagiGoApp = () => <div>Zindagi Go App Details Coming Soon!</div>;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section id = "home">
              <Hero />
            </section>
            
            <section id = "about">
              <About />
            </section>
            <section id = "projects">
              <ProjectCategories />
              <Projects />
            </section>
            <section id = "contact">
              <Footer />
            </section>
            
          </>
        } />
        <Route path="/ieee-website" element={<IEEEWebsite />} />
        <Route path="/hackniti" element={<HacknitiWebsite />} />
        <Route path="/gdsc-nitj" element={<GDSCWebsite />} />
        <Route path="/zindagi-go" element={<ZindagiGoApp />} />
      </Routes>
    </>
  );
}

export default App;
