import React from 'react';

export default function Integrations() {
  return (
    <div className="row">
      {/* Github Activity */}
      <section className="card col-github" data-aos="flip-left" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.1">
        <div className="card-header"><i className="fa-brands fa-github"></i> GITHUB ACTIVITY</div>
        <div className="github-header">
          <img src="assets/images/hero_avatar.png" alt="github" className="gh-avatar" />
          <span>mohammedpayass</span>
        </div>
        <div className="gh-graph">
          <div className="gh-grid"></div>
        </div>
        <div className="gh-stats">
          <div className="gh-stat"><strong>87</strong> Repos</div>
          <div className="gh-stat"><strong>312</strong> Commits</div>
          <div className="gh-stat"><strong>52</strong> PRs</div>
          <div className="gh-stat"><strong>18</strong> Stars</div>
        </div>
      </section>

      {/* API Integrations */}
      <section className="card col-api" data-aos="fade-left" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.1">
        <div className="card-header"><i className="fa-solid fa-plug"></i> API INTEGRATIONS</div>
        <div className="api-grid">
          <div className="api-item">
            <i className="fa-brands fa-stripe text-indigo"></i>
            <div>
              <h6>Stripe</h6>
              <p>Payment Gateway</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-solid fa-comment-sms text-red"></i>
            <div>
              <h6>Twilio</h6>
              <p>SMS & Communication</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-brands fa-paypal text-blue"></i>
            <div>
              <h6>PayPal</h6>
              <p>Payment Gateway</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-solid fa-fire text-orange"></i>
            <div>
              <h6>Firebase</h6>
              <p>Authentication</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-solid fa-money-bill-wave text-green"></i>
            <div>
              <h6>Razorpay</h6>
              <p>Payment Gateway</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-solid fa-users text-teal"></i>
            <div>
              <h6>Social Auth</h6>
              <p>OAuth Login</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-solid fa-map-location-dot text-blue"></i>
            <div>
              <h6>Google Maps</h6>
              <p>Maps & Location</p>
            </div>
          </div>
          <div className="api-item">
            <i className="fa-solid fa-comment-dots text-orange"></i>
            <div>
              <h6>Text Local</h6>
              <p>SMS Gateway</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
