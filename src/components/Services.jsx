import React from 'react';

export default function Services({ activeService, setActiveService }) {
  return (
    <section id="services" className="premium-services-section w-100" data-aos="fade-up">
      <div className="ps-header">
        <div className="card-header border-0 m-0"><i className="fa-solid fa-hand-holding-hand"></i> CORE SERVICES</div>
        <h2 className="ps-main-title">What I Bring To The Table</h2>
      </div>

      <div className="ps-wrapper">
        {/* Left: Dynamic Visuals */}
        <div className="ps-visuals-col">
          <div className={`ps-visual-card ${activeService === 1 ? 'active' : ''}`} id="vis-1">
            <div className="ps-blob ps-blob-green"></div>
            <div className="ps-glass-icon"><i className="fa-solid fa-code"></i></div>
            <div className="ps-float-badge badge-tr">Frontend</div>
            <div className="ps-float-badge badge-bl">Backend</div>
          </div>
          <div className={`ps-visual-card ${activeService === 2 ? 'active' : ''}`} id="vis-2">
            <div className="ps-blob ps-blob-blue"></div>
            <div className="ps-glass-icon"><i className="fa-solid fa-network-wired"></i></div>
            <div className="ps-float-badge badge-tr">REST APIs</div>
            <div className="ps-float-badge badge-bl">Webhooks</div>
          </div>
          <div className={`ps-visual-card ${activeService === 3 ? 'active' : ''}`} id="vis-3">
            <div className="ps-blob ps-blob-orange"></div>
            <div className="ps-glass-icon"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="ps-float-badge badge-tr">Payments</div>
            <div className="ps-float-badge badge-bl">Scale</div>
          </div>
          <div className={`ps-visual-card ${activeService === 4 ? 'active' : ''}`} id="vis-4">
            <div className="ps-blob ps-blob-purple"></div>
            <div className="ps-glass-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <div className="ps-float-badge badge-tr">Security</div>
            <div className="ps-float-badge badge-bl">Uptime</div>
          </div>
        </div>

        {/* Right: Accordion List */}
        <div className="ps-list-col">
          <div 
            className={`ps-item ${activeService === 1 ? 'active' : ''}`} 
            onMouseEnter={() => setActiveService(1)}
          >
            <div className="ps-item-visible">
              <span className="ps-num">01</span>
              <h3>Web Development</h3>
              <div className="ps-arrow-box"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
            <div className="ps-item-hidden">
              <p>Custom websites, dynamic single-page applications, and responsive layouts built with modern
                frameworks. We ensure high performance, security, and pixel-perfect design tailored to your vision.
              </p>
            </div>
          </div>

          <div 
            className={`ps-item ${activeService === 2 ? 'active' : ''}`} 
            onMouseEnter={() => setActiveService(2)}
          >
            <div className="ps-item-visible">
              <span className="ps-num">02</span>
              <h3>API Integration</h3>
              <div className="ps-arrow-box"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
            <div className="ps-item-hidden">
              <p>Robust RESTful API design, third-party service connections, and secure data synchronization to
                empower your applications.</p>
            </div>
          </div>

          <div 
            className={`ps-item ${activeService === 3 ? 'active' : ''}`} 
            onMouseEnter={() => setActiveService(3)}
          >
            <div className="ps-item-visible">
              <span className="ps-num">03</span>
              <h3>E-Commerce</h3>
              <div className="ps-arrow-box"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
            <div className="ps-item-hidden">
              <p>Scalable online storefronts, secure payment gateways, and seamless shopping experiences optimized for
                conversions.</p>
            </div>
          </div>

          <div 
            className={`ps-item ${activeService === 4 ? 'active' : ''}`} 
            onMouseEnter={() => setActiveService(4)}
          >
            <div className="ps-item-visible">
              <span className="ps-num">04</span>
              <h3>Maintenance</h3>
              <div className="ps-arrow-box"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
            <div className="ps-item-hidden">
              <p>Ongoing technical support, performance tuning, bug fixing, and continuous platform improvements to
                keep your business running smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
