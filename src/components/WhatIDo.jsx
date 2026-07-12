import React from 'react';

export default function WhatIDo() {
  return (
    <section className="card design10-section w-100 mb-4" data-aos="fade-up">
      <div className="d10-header w-100 mb-4 px-2">
        <h2>What I Do</h2>
      </div>

      <div className="d10-container">
        {/* Item 1 */}
        <div className="d10-card d10-green" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
          <div className="d10-icon-wrap"><i className="fa-solid fa-code"></i></div>
          <h6>Web Development</h6>
          <p>Building responsive and modern websites.</p>
        </div>
        <div className="d10-arrow d10-green"><i className="fa-solid fa-chevron-right"></i></div>

        {/* Item 2 */}
        <div className="d10-card d10-blue" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
          <div className="d10-icon-wrap"><i className="fa-solid fa-network-wired"></i></div>
          <h6>API Development</h6>
          <p>RESTful APIs and third-party integrations.</p>
        </div>
        <div className="d10-arrow d10-blue"><i className="fa-solid fa-chevron-right"></i></div>

        {/* Item 3 */}
        <div className="d10-card d10-purple" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
          <div className="d10-icon-wrap"><i className="fa-solid fa-desktop"></i></div>
          <h6>Frontend Development</h6>
          <p>Interactive, responsive and user-friendly UI.</p>
        </div>
        <div className="d10-arrow d10-purple"><i className="fa-solid fa-chevron-right"></i></div>

        {/* Item 4 */}
        <div className="d10-card d10-orange" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
          <div className="d10-icon-wrap"><i className="fa-solid fa-database"></i></div>
          <h6>Database Design</h6>
          <p>Optimized, scalable and secure databases.</p>
        </div>
        <div className="d10-arrow d10-orange"><i className="fa-solid fa-chevron-right"></i></div>

        {/* Item 5 */}
        <div className="d10-card d10-red" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
          <div className="d10-icon-wrap"><i className="fa-solid fa-headset"></i></div>
          <h6>Maintenance & Support</h6>
          <p>Ongoing support and performance tuning.</p>
        </div>
      </div>
    </section>
  );
}
