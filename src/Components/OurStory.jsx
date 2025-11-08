import React from "react";
import { Award } from "lucide-react"; 
import "../Styles/OurStory.css";

const OurStory = () => {
  return (
    <section id="about" className="our-story container">
      <div className="container story-container">
        {/* Left Side Text */}
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Founded in the heart of Varanasi, <strong>D & R Constructions and Design</strong> has
            been transforming the architectural landscape of this ancient city for over a decade.
            We understand the delicate balance between preserving Varanasi's rich heritage and
            embracing modern construction techniques.
          </p>

          <p>
            Our journey began with a simple vision: to create spaces that honor the cultural essence
            of Varanasi while meeting contemporary lifestyle needs. From traditional homes in the
            old city to modern commercial complexes, we've built our reputation on quality,
            integrity, and innovation.
          </p>

          <p>
            Today, we stand as Varanasi's trusted construction partner, having completed over{" "}
            <strong>200 projects</strong> and touched countless lives through our work. Our team
            combines local expertise with global best practices, ensuring every project reflects our
            commitment to excellence.
          </p>

          {/* Stats */}
          <div className="stats">
            <div>
              <h3>200+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="story-image">
          <img src="https://dr-construction.vercel.app/_next/image?url=%2Fstory.jpg&w=1920&q=75" alt="Our Team" />
          <div className="award-card">
            <Award className="award-icon" />
            <div>
              <h4>Award Winning</h4>
              <p>Excellence in Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
