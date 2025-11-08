import React from "react";
import "../Styles/Navbar.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm position-fixed w-100 top-0">
      <div className="container d-flex align-items-center justify-content-between">
        
        <a className="navbar-brand navbar-logo fw-bold text-danger" href="#home">
          D & R Constructions
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <a href="#contact" className="quote-button d-none d-lg-block">
          Get Quote
        </a>
      </div>
    </nav>
  );
}

export default Header;

