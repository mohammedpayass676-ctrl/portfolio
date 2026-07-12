import React from 'react';
import CountUp from './CountUp';

export default function Hero({ handleNavLinkClick }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-right" data-aos-duration="1200">
        <h4>Hi, I'm</h4>
        <h1>Mohammed<br />Payass S</h1>
        <h3>Full Stack PHP Developer</h3>
        <p>I create robust, scalable and user-friendly web applications that solve real world problems.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavLinkClick(e, 'contact')}>
            Hire Me <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="/assets/images/Mohammed_Resume.pdf" target="_blank" download="Mohammed_Resume.pdf" className="btn btn-secondary">Download CV <i className="fa-solid fa-download"></i></a>
        </div>
        <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
          <div className="stat">
            <i className="fa-regular fa-star"></i> 
            <strong><CountUp target={3.2} />+</strong> Years Experience
          </div>
          <div className="stat">
            <i className="fa-solid fa-layer-group"></i> 
            <strong><CountUp target={30} />+</strong> Projects Completed
          </div>
          <div className="stat">
            <i className="fa-regular fa-face-smile"></i> 
            <strong><CountUp target={15} />+</strong> Happy Clients
          </div>
          <div className="stat">
            <i className="fa-solid fa-check-double"></i> 
            <strong><CountUp target={100} />%</strong> Client Satisfaction
          </div>
        </div>
      </div>
      <div 
        className="hero-image" 
        data-aos="zoom-in-left" 
        data-aos-duration="1500" 
        data-tilt 
        data-tilt-max="10"
        data-tilt-speed="400" 
        data-tilt-perspective="1000"
      >
        <img src="/assets/images/hero_avatar.png" alt="Mohammed Payass S" />
      </div>
    </section>
  );
}
