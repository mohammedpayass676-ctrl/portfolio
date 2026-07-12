import React from 'react';

export default function Projects({ activeProject, setActiveProject }) {
  return (
    <>
      {/* Featured Projects Accordion Deck */}
      <section id="projects" className="card featured-projects-deck" data-aos="fade-up">
        <div className="card-header d-flex justify-between">
          <span><i className="fa-solid fa-star"></i> FEATURED PROJECTS</span>
          <a href="#" className="view-all">View All Projects <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="projects-deck-container">
          {/* Card 1 */}
          <div 
            className={`project-deck-card ${activeProject === 0 ? 'active' : ''}`} 
            style={{ backgroundImage: "url('assets/images/grocery_app.png')" }}
            onMouseEnter={() => setActiveProject(0)}
          >
            <div className="deck-overlay"></div>
            <div className="deck-content">
              <span className="deck-badge"><i className="fa-solid fa-cart-shopping"></i> Laravel + Vue</span>
              <h4>Grocery Delivery Application</h4>
              <p>A comprehensive grocery delivery platform featuring Admin and Merchant web panels for managing products,
                orders, inventory, and deliveries, along with a dedicated mobile app for customers. Includes real-time
                order tracking, secure online payments, and a seamless checkout experience.</p>
              <div className="deck-tech-badges">
                <span>Laravel</span>
                <span>Vue.js</span>
                <span>MySQL</span>
              </div>
              <a href="https://farmersdstore.com/" target="_blank" rel="noopener noreferrer" className="btn-deck-demo">
                Live Demo <i className="fa-solid fa-circle-play"></i>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className={`project-deck-card ${activeProject === 1 ? 'active' : ''}`} 
            style={{ backgroundImage: "url('assets/images/car_marketplace.png')" }}
            onMouseEnter={() => setActiveProject(1)}
          >
            <div className="deck-overlay"></div>
            <div className="deck-content">
              <span className="deck-badge"><i className="fa-solid fa-car"></i> React + Laravel</span>
              <h4>Used Car Sales Platform</h4>
              <p>A comprehensive platform for buying and selling used cars with integrated services including FASTag
                activation, car insurance, and dealer management. Successfully implemented the FASTag activation module
                with a streamlined verification and activation process.</p>
              <div className="deck-tech-badges">
                <span>React.js</span>
                <span>Laravel</span>
                <span>Fastag API</span>
              </div>
              <a href="https://bluvo.in" target="_blank" rel="noopener noreferrer" className="btn-deck-demo">
                Live Demo <i className="fa-solid fa-circle-play"></i>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className={`project-deck-card ${activeProject === 2 ? 'active' : ''}`} 
            style={{ backgroundImage: "url('assets/images/food_app.png')" }}
            onMouseEnter={() => setActiveProject(2)}
          >
            <div className="deck-overlay"></div>
            <div className="deck-content">
              <span className="deck-badge"><i className="fa-solid fa-utensils"></i> PHP Laravel</span>
              <h4>Food Ordering Application</h4>
              <p>A high-performance ordering app featuring automated payment flows, detailed cart logic, and user panels.</p>
              <div className="deck-tech-badges">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <a href="https://www.shopurfood.com/" target="_blank" rel="noopener noreferrer" className="btn-deck-demo">
                Live Demo <i className="fa-solid fa-circle-play"></i>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className={`project-deck-card ${activeProject === 3 ? 'active' : ''}`} 
            style={{ backgroundImage: "url('assets/images/multi_service.png')" }}
            onMouseEnter={() => setActiveProject(3)}
          >
            <div className="deck-overlay"></div>
            <div className="deck-content">
              <span className="deck-badge"><i className="fa-solid fa-layer-group"></i> Laravel + jQuery</span>
              <h4>Multi-Service Platform</h4>
              <p>Unified catalog platform designed to connect service providers with client booking systems securely.</p>
              <div className="deck-tech-badges">
                <span>Laravel</span>
                <span>jQuery</span>
                <span>MySQL</span>
              </div>
              <a href="#" className="btn-deck-demo">Live Demo <i className="fa-solid fa-circle-play"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo (Only) */}
      <section className="card live-demos" data-aos="fade-up" data-tilt data-tilt-max="2" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.1">
        <div className="card-header"><i className="fa-solid fa-play"></i> LIVE DEMO (ONLY)</div>
        <div className="demos-grid">
          <div className="demo-item">
            <img src="assets/images/grocery_app.png" alt="Grocery App" />
            <div className="demo-info">
              <h6>Grocery Delivery Application</h6>
              <p>Online grocery platform with product management, secure payments and delivery system.</p>
              <a href="https://farmersdstore.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-2">
                Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="demo-item">
            <img src="assets/images/car_marketplace.png" alt="Car Marketplace" />
            <div className="demo-info">
              <h6>Used Car Sales Platform</h6>
              <p>B2B sales platform with dealer onboarding, car insurance, and a fully completed automated FASTag activation module.</p>
              <a href="https://bluvo.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-2">
                Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
