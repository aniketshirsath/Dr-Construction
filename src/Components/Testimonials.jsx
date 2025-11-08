import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      text: `"D & R Constructions transformed our vision into reality. Their attention to detail and respect for our cultural preferences made the entire process seamless. Our new home perfectly blends modern comfort with traditional Varanasi charm."`,
      name: "Rajesh Sharma",
      role: "Homeowner",
      location: "Assi Ghat, Varanasi",
      image: "https://dr-construction.vercel.app/_next/image?url=%2Ftestimonials%2Fclient-1.jpg&w=256&q=75"
    },
    {
      text: `"Their professionalism, timely delivery, and commitment to quality are unmatched. I highly recommend D & R Constructions!"`,
      name: "Anjali Verma",
      role: "Architect",
      location: "Lucknow, UP",
      image: "https://dr-construction.vercel.app/_next/image?url=%2Ftestimonials%2Fclient-2.webp&w=128&q=75"
    },
    {
      text: `"From start to finish, D & R Constructions made the building process smooth and enjoyable. Excellent service!"`,
      name: "Rahul Singh",
      role: "Business Owner",
      location: "Allahabad, UP",
      image: "https://dr-construction.vercel.app/_next/image?url=%2Ftestimonials%2Fclient-3.webp&w=128&q=75"
    }
  ];

  return (
    <section className="testimonials py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">What Our Clients Say</h2>
        <p className="text-muted mb-5">
          Don't just take our word for it. Here's what our satisfied clients have to say about their experience with D & R Constructions.
        </p>

        <Carousel indicators={true} controls={true} interval={4000}>
          {testimonials.map((t, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-card mx-auto p-4 shadow-sm bg-white">
                <div className="stars mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>

                <blockquote className="fst-italic text-dark">{t.text}</blockquote>

                <div className="testimonial-author mt-4 d-flex align-items-center justify-content-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle me-3 user-img"
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{t.name}</h6>
                    <p className="text-danger mb-0 small">{t.role}</p>
                    <p className="text-muted small mb-0">{t.location}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
