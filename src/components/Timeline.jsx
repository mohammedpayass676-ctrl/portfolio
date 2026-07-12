import React from 'react';

export default function Timeline() {
  return (
    <section className="card col-career w-100" data-aos="fade-up" data-tilt data-tilt-max="1" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.05">
      <div className="card-header"><i className="fa-solid fa-timeline"></i> CAREER TIMELINE</div>
      <div className="career-timeline">
        <div className="c-step">
          <h6>2022</h6>
          <p>Jr PHP Developer</p>
          <small>Qono Technologies</small>
        </div>
        <div className="c-line"></div>
        <div className="c-step">
          <h6>2023</h6>
          <p>PHP Developer</p>
          <small>Qono Technologies</small>
        </div>
        <div className="c-line"></div>
        <div className="c-step active">
          <h6>2024 - Present</h6>
          <p>Senior PHP Developer</p>
          <small>Creative Bees</small>
        </div>
      </div>
    </section>
  );
}
