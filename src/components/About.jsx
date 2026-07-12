import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="card about-card" 
      data-aos="fade-up" 
      data-tilt 
      data-tilt-max="1" 
      data-tilt-speed="400"
      data-tilt-glare 
      data-tilt-max-glare="0.05"
    >
      <div className="about-left">
        <div className="card-header"><i className="fa-regular fa-user"></i> ABOUT ME</div>
        <p className="about-desc">
          Full Stack PHP Developer with 3+ years of experience in building dynamic web applications using PHP, 
          Laravel, CodeIgniter, MySQL and modern technologies. I focus on performance, scalability and clean code.
        </p>

        <div className="about-info-grid">
          <div className="info-box">
            <i className="fa-regular fa-envelope"></i>
            <div>
              <span>Email</span>
              <strong>mohammedpayass03<br />@gmail.com</strong>
            </div>
          </div>
          <div className="info-box">
            <i className="fa-solid fa-phone"></i>
            <div>
              <span>Phone</span>
              <strong>+91 9361276781</strong>
            </div>
          </div>
          <div className="info-box">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <span>Location</span>
              <strong>Pollachi, Tamil<br />Nadu, India</strong>
            </div>
          </div>
          <div className="info-box">
            <i className="fa-solid fa-briefcase"></i>
            <div>
              <span>Experience</span>
              <strong>3.2 Years</strong>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-primary mt-3">Download CV <i className="fa-solid fa-download"></i></a>
      </div>
      <div className="about-right">
        <img src="/assets/images/hero2.png" alt="Mohammed Payass S" />
      </div>
    </section>
  );
}
