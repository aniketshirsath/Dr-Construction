import React, { useState } from "react";
import { FaGem, FaClock, FaLightbulb, FaMapMarkerAlt } from "react-icons/fa";
import "../Styles/WhyChooseUs.css";

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const features = [
    {
      icon: <FaGem />,
      title: "Quality Construction",
      desc: "We use premium materials and employ skilled craftsmen to ensure every project meets the highest standards of quality and durability.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Our efficient project management ensures timely completion without compromising on quality, keeping your schedule and budget intact.",
    },
    {
      icon: <FaLightbulb />,
      title: "Modern Designs",
      desc: "Contemporary architectural solutions that blend seamlessly with cultural heritage and modern lifestyle needs.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local Expertise",
      desc: "Deep understanding of local architectural requirements, regulations, and cultural sensitivities.",
    },
  ];

  return (
    <section className="why-choose-us container text-center py-5 mt-5">
      <h2 className="fw-bold mb-3 text-dark">Why Choose Us</h2>
      <p className="text-muted mb-5">
        We bring together experience, innovation, and local expertise to deliver exceptional construction and design solutions.
      </p>

      <div className="row justify-content-center g-4 px-3 ps-5 pe-5">
        {features.map((item, index) => (
          <div
            key={index}
            className={`col-lg-3 col-md-6 col-sm-12 feature-box ${activeIndex === index ? "active" : ""
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="icon mb-3">{item.icon}</div>
            <h5 className="title mb-2">{item.title}</h5>
            <p className="desc mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChooseUs;
