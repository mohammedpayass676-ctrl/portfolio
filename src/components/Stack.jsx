import React from 'react';

export default function Stack() {
  return (
    <>
      {/* AI Tools Card */}
      <section 
        className="card premium-stack-card w-100 mb-4" 
        data-aos="fade-up" 
        data-tilt 
        data-tilt-max="2"
        data-tilt-speed="400" 
        data-tilt-glare 
        data-tilt-max-glare="0.05"
      >
        <div className="stack-header">
          <span className="stack-subtitle">AI TOOLS</span>
          <h2 className="stack-title">Boosting Development with <b>AI</b></h2>
        </div>
        <div className="stack-grid">
          <div className="m-pill"><i className="fa-solid fa-comment-dots text-green"></i> ChatGPT</div>
          <div className="m-pill"><i className="fa-brands fa-github text-dark"></i> GitHub Copilot</div>
          <div className="m-pill"><i className="fa-solid fa-brain text-orange"></i> Claude</div>
          <div className="m-pill"><i className="fa-solid fa-cursor text-blue"></i> Cursor</div>
          <div className="m-pill"><i className="fa-solid fa-magnifying-glass text-teal"></i> Perplexity</div>
          <div className="m-pill"><i className="fa-solid fa-n text-dark"></i> Notion AI</div>
          <div className="m-pill"><i className="fa-solid fa-bolt text-blue"></i> Grok</div>
          <div className="m-pill"><i className="fa-solid fa-rocket text-purple"></i> Antigravity</div>
          <div className="m-pill"><i className="fa-solid fa-code text-orange"></i> Replit AI</div>
          <div className="m-pill"><i className="fa-solid fa-microchip text-dark"></i> Manus.ai</div>
          <div className="m-pill"><i className="fa-solid fa-wand-magic-sparkles text-indigo"></i> Stitch AI</div>
        </div>
      </section>

      {/* Tech Stack Card */}
      <section 
        className="card premium-stack-card w-100" 
        data-aos="fade-up" 
        data-tilt 
        data-tilt-max="2"
        data-tilt-speed="400" 
        data-tilt-glare 
        data-tilt-max-glare="0.05"
      >
        <div className="stack-header">
          <span className="stack-subtitle">TECH STACK</span>
          <h2 className="stack-title">Built with the best technologies</h2>
        </div>
        <div className="stack-grid">
          <div className="m-pill"><i className="fa-brands fa-html5 text-orange"></i> HTML</div>
          <div className="m-pill"><i className="fa-brands fa-css3-alt text-blue"></i> CSS</div>
          <div className="m-pill"><i className="fa-brands fa-js text-yellow"></i> JavaScript</div>
          <div className="m-pill"><i className="fa-brands fa-php text-indigo"></i> PHP</div>
          <div className="m-pill"><i className="fa-brands fa-laravel text-red"></i> Laravel</div>
          <div className="m-pill"><i className="fa-solid fa-fire text-orange"></i> CodeIgniter</div>
          <div className="m-pill"><i className="fa-brands fa-node-js text-green"></i> Node.js</div>
          <div className="m-pill"><i className="fa-brands fa-vuejs text-green"></i> Vue.js</div>
          <div className="m-pill"><i className="fa-brands fa-react text-blue"></i> React</div>
          <div className="m-pill"><i className="fa-solid fa-database text-teal"></i> MySQL</div>
          <div className="m-pill"><i className="fa-brands fa-git-alt text-orange"></i> Git</div>
          <div className="m-pill"><i className="fa-brands fa-docker text-blue"></i> Docker</div>
          <div className="m-pill"><i className="fa-brands fa-aws text-orange"></i> AWS</div>
          <div className="m-pill"><i className="fa-solid fa-server text-purple"></i> Hostinger</div>
          <div className="m-pill"><i className="fa-brands fa-digital-ocean text-blue"></i> DigitalOcean</div>
          <div className="m-pill"><i className="fa-brands fa-bootstrap text-purple"></i> Bootstrap</div>
        </div>
      </section>
    </>
  );
}
