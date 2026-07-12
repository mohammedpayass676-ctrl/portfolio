import React from 'react';

export default function Footer({ handleNavLinkClick }) {
  return (
    <>
      {/* CTA Section */}
      <section className="cta-banner" data-aos="zoom-in" data-aos-duration="1000" data-tilt data-tilt-max="2" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.3">
        <div className="cta-content">
          <h2>Let's Build Something Together</h2>
          <p>I'm available for new opportunities and exciting projects.</p>
          <a href="#contact" className="btn btn-white mt-2" onClick={(e) => handleNavLinkClick(e, 'contact')}>
            Get in Touch <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <img src="/assets/images/hero2.png" style={{ width: '400px', height: 'auto' }} alt="CTA" className="cta-img" data-aos="fade-up" data-aos-delay="400" />
      </section>

      {/* Footer */}
      <footer id="contact" data-aos="fade-up">
        <div className="footer-container">
          <div className="f-col">
            <h2 className="text-green mb-2">MP</h2>
            <p>Building digital solutions that are fast, secure and scalable with clean code.</p>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          <div className="f-col">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a></li>
              <li><a href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
              <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')}>Services</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h6>Services</h6>
            <ul>
              <li>Web Development</li>
              <li>API Development</li>
              <li>E-Commerce Solutions</li>
              <li>Database Design</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
          <div className="f-col">
            <h6>Technologies</h6>
            <ul>
              <li>PHP</li>
              <li>Laravel</li>
              <li>JavaScript</li>
              <li>Vue.js</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="f-col">
            <h6>Contact Info</h6>
            <ul className="contact-info-list">
              <li><i className="fa-solid fa-phone text-green"></i> +91 9361276781</li>
              <li><i className="fa-solid fa-envelope text-green"></i> mohammedpayass03@gmail.com</li>
              <li><i className="fa-solid fa-location-dot text-green"></i> Pollachi, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Mohammed Payass S. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
