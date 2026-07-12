import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import WhatIDo from './components/WhatIDo';
import Stack from './components/Stack';
import DevelopmentProcess from './components/DevelopmentProcess';
import Services from './components/Services';
import Projects from './components/Projects';
import Integrations from './components/Integrations';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeService, setActiveService] = useState(1);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
      });
    }
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Rich Animated Background */}
      <div className="animated-fluid-bg">
        <div className="fluid-blob blob-1"></div>
        <div className="fluid-blob blob-2"></div>
        <div className="fluid-blob blob-3"></div>
        <div className="fluid-blob blob-4"></div>

        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
      </div>

      {/* Navbar Component */}
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        handleNavLinkClick={handleNavLinkClick} 
      />

      {/* Hero Component */}
      <Hero handleNavLinkClick={handleNavLinkClick} />

      {/* Main Content Grid */}
      <main className="container">
        <div className="row">
          <About />
        </div>

        <div className="row">
          <Experience />
        </div>

        <div className="row">
          <WhatIDo />
        </div>

        <div className="row mb-4 flex-column">
          <Stack />
        </div>

        <div className="row">
          <DevelopmentProcess />
        </div>

        <div className="row">
          <Services 
            activeService={activeService} 
            setActiveService={setActiveService} 
          />
        </div>

        <Projects 
          activeProject={activeProject} 
          setActiveProject={setActiveProject} 
        />

        <Integrations />

        <div className="row">
          <Timeline />
        </div>

        <Footer handleNavLinkClick={handleNavLinkClick} />
      </main>
    </>
  );
}

export default App;
