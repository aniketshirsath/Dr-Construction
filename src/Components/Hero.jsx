import React from 'react';

function Hero() {
  return (
    <section id='home' className="hero">
      <div className="container">
        <h2>
          Building Dreams,<br />
          <span>Designing Futures</span>
        </h2>
        <p>
          Varanasi's premier construction and design firm, creating exceptional
          spaces with modern innovation and traditional values.
        </p>

        <div className="btns justify-space-between">
          <a href="#projects" className="ctaa-button">
            Explore Projects
          </a>
          <a href="#quote" className="cta-button2">
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;