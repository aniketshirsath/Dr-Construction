import React from "react";
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 justify-content-center text-start footer-row">

          <div className="col-md-4">
            <h5 className="footer-logo">D & R Constructions</h5>
            <p className="footer-desc">
              Building Dreams, Designing Futures in Varanasi. We combine
              traditional craftsmanship with modern innovation to create
              exceptional spaces.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#">Residential Projects</a></li>
              <li><a href="#">Commercial Projects</a></li>
              <li><a href="#">Renovations</a></li>
              <li><a href="#">Interior Design</a></li>
              <li><a href="#">Project Management</a></li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 mb-3 text-light opacity-25" />

        <div className="text-center small">
          <p className="mb-0">
            D & R Constructions and Design – Building with Trust in Varanasi
          </p>
          <p className="mb-0">&copy; 2025 D & R Constructions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
