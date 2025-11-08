import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styles/Contactus.css";

const Contactus = () => {
  return (
    <section id="contact" className="contact-section ms-5 p-5">
      <Container>
        <Row>
          <Col md={5}>
            <h3 className="mb-4 fw-bold">Get In Touch</h3>

            <div className="contact-item mb-4 d-flex">
              <div className="icon-box">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold">Our Office</h6>
                <p className="text-muted mb-0">
                  123 Construction Plaza, Cantonment Area <br />
                  Varanasi, Uttar Pradesh 221002, India
                </p>
              </div>
            </div>

            <div className="contact-item mb-4 d-flex">
              <div className="icon-box">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold">Phone</h6>
                <p className="text-muted mb-0">+91 9876543210</p>
                <p className="text-muted">+91 9876543211</p>
              </div>
            </div>

            <div className="contact-item mb-4 d-flex">
              <div className="icon-box">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold">Email</h6>
                <p className="text-muted mb-0">info@drconstructions.com</p>
                <p className="text-muted">projects@drconstructions.com</p>
              </div>
            </div>

            <div className="contact-item mb-4 d-flex">
              <div className="icon-box">
                <i className="bi bi-clock-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold">Business Hours</h6>
                <p className="text-muted mb-0">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-muted">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="map-container mt-4">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Varanasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

          
          <Col md={7}>
            <div className="form-box p-4">
              <h4 className="fw-bold mb-4">Send us a Message</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Project Details *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                  />
                </Form.Group>

                <div className="text-end text-muted small mb-3">0/500 characters</div>

                <Button type="submit" className="send-btn w-100">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contactus;
