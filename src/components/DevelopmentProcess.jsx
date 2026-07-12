import React from 'react';

export default function DevelopmentProcess() {
  return (
    <section 
      className="card dev-process-card" 
      data-aos="fade-up" 
      data-tilt 
      data-tilt-max="1" 
      data-tilt-speed="400"
      data-tilt-glare 
      data-tilt-max-glare="0.05"
    >
      <div className="section-title-wrapper">
        <div className="title-line left-line"></div>
        <div className="card-header m-0"><i className="fa-solid fa-spinner"></i> DEVELOPMENT PROCESS</div>
        <div className="title-line right-line"></div>
      </div>

      <div className="process-wave-container">
        <div className="p-step step-1">
          <div className="p-icon-wrap"><i className="fa-regular fa-clipboard"></i></div>
          <h6>1. Requirement</h6>
          <p>Understanding client needs</p>
          <div className="arc arc-up"></div>
        </div>
        <div className="p-step step-2">
          <div className="p-icon-wrap"><i className="fa-regular fa-map"></i></div>
          <h6>2. Planning</h6>
          <p>Analysis and planning</p>
          <div className="arc arc-down"></div>
        </div>
        <div className="p-step step-3">
          <div className="p-icon-wrap"><i className="fa-solid fa-pen-ruler"></i></div>
          <h6>3. Design</h6>
          <p>UI/UX and architecture</p>
          <div className="arc arc-up"></div>
        </div>
        <div className="p-step step-4">
          <div className="p-icon-wrap"><i className="fa-solid fa-code"></i></div>
          <h6>4. Development</h6>
          <p>Coding and implementation</p>
          <div className="arc arc-down"></div>
        </div>
        <div className="p-step step-5">
          <div className="p-icon-wrap"><i className="fa-solid fa-vial"></i></div>
          <h6>5. Testing</h6>
          <p>Quality and bug fixing</p>
          <div className="arc arc-up"></div>
        </div>
        <div className="p-step step-6">
          <div className="p-icon-wrap"><i className="fa-solid fa-rocket"></i></div>
          <h6>6. Deployment</h6>
          <p>Launch and maintenance</p>
        </div>
      </div>
    </section>
  );
}
