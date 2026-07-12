import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="card modern-exp-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="mexp-bg-shape shape-a"></div>
      <div className="mexp-bg-shape shape-b"></div>

      <div
        className="card-header text-center w-100 mb-5 border-0 bg-transparent shadow-none"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <i className="fa-solid fa-briefcase"></i> PROFESSIONAL EXPERIENCE
      </div>

      <div className="mexp-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Experience 1 */}
        <div
          className="mexp-card"
          data-tilt
          data-tilt-max="2"
          data-tilt-speed="400"
          data-tilt-glare
          data-tilt-max-glare="0.05"
          data-aos="fade-up"
        >
          <div className="mexp-left">
            <div className="mexp-year">2024<br /><span>Present</span></div>
            <div className="mexp-company">
              <div className="company-logo"><i className="fa-solid fa-code"></i></div>
              <span>Creative Bees</span>
            </div>
          </div>
          <div className="mexp-right">
            <h3 className="mexp-role">Senior PHP Developer</h3>
            <ul className="mexp-list">
              <li><i className="fa-solid fa-arrow-right"></i> Developed and maintained scalable web applications using Laravel, React.js, Vue.js, and MySQL.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Led backend development and optimized application performance.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Integrated third-party APIs and payment gateways.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Guided the Spinny team in integrating FASTag activation services.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Collaborated with cross-functional teams to deliver high-quality products.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Handled client communication and technical solution delivery.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div
          className="mexp-card"
          data-tilt
          data-tilt-max="2"
          data-tilt-speed="400"
          data-tilt-glare
          data-tilt-max-glare="0.05"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="mexp-left">
            <div className="mexp-year">2021<br /><span>2022</span></div>
            <div className="mexp-company">
              <div className="company-logo"><i className="fa-solid fa-laptop-code"></i></div>
              <span>Qono Technologies</span>
            </div>
          </div>
          <div className="mexp-right">
            <h3 className="mexp-role">Jr PHP Developer</h3>
            <ul className="mexp-list">
              <li><i className="fa-solid fa-arrow-right"></i> Built and maintained web applications using PHP, CodeIgniter, and MySQL.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Assisted in API integration and backend development tasks.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Fixed bugs and improved application performance.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Worked closely with senior developers to understand project requirements.</li>
              <li><i className="fa-solid fa-arrow-right"></i> Gained hands-on experience in full-stack development.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
