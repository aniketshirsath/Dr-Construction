import React from 'react'
import '../Styles/OurPortfolio.css'

const OurPortfoliio = () => {
  return (
     <section id="portfolio" className="portfolio-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Our Portfolio</h2>
        <p className="portfolio-subtext mx-auto mb-4">
          Discover our diverse range of projects that showcase our commitment to
          excellence and innovation in construction and design.
        </p>

        <button className="btn btn-danger portfolio-btn mb-5">All Projects</button>

        <p className="no-projects pt-5">No projects found in this category.</p>
      </div>
    </section>
  )
}

export default OurPortfoliio
