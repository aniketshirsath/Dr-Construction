import React from "react";
import { FaHome, FaBuilding, FaPaintBrush, FaClipboardCheck } from "react-icons/fa";
import { GiHammerSickle } from "react-icons/gi";
import "../Styles/Services.css";

function Services() {
  return (
    <section id="services" className="services py-5">
      <div className="container-fluid text-center">
        <h2 className="fw-bold mb-3 s-text">Our Services</h2>
        <p className="text-muted mb-5">
          From concept to completion, we offer comprehensive construction and design services tailored to your vision
        </p>

        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-3 m-3 service-card">
            <div className="icon-box">
              <FaHome />
            </div>
            <h5 className="fw-bold mt-3">Residential Projects</h5>
            <p className="text-muted text-start">
              Custom homes designed with modern aesthetics and traditional Varanasi charm
            </p>
          </div>

          <div className="col-md-4 col-lg-3 m-3 service-card">
            <div className="icon-box">
              <FaBuilding />
            </div>
            <h5 className="fw-bold mt-3">Commercial Projects</h5>
            <p className="text-muted text-start">
              Professional spaces that enhance business growth and productivity
            </p>
          </div>

          <div className="col-md-4 col-lg-3 m-3 service-card">
            <div className="icon-box">
              <GiHammerSickle />
            </div>
            <h5 className="fw-bold mt-3">Renovations</h5>
            <p className="text-muted text-start">
              Transform existing spaces with contemporary design and quality craftsmanship
            </p>
          </div>
          <div className="col-md-4 col-lg-3 m-3 service-card">
            <div className="icon-box">
              <FaPaintBrush />
            </div>
            <h5 className="fw-bold mt-3">Interior Design</h5>
            <p className="text-muted text-start">
              Elegant interiors that reflect your personality and lifestyle
            </p>
          </div>

          <div className="col-md-4 col-lg-3 m-3 service-card">
            <div className="icon-box">
              <FaClipboardCheck />
            </div>
            <h5 className="fw-bold mt-3">Project Management</h5>
            <p className="text-muted text-start">
              End-to-end project coordination ensuring timely and quality delivery
            </p>
          </div>

          
        </div>
     
      </div>
    </section>
  );
}

export default Services;
