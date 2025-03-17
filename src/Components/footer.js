import React from "react";
import { Container, Row, Col } from "reactstrap";


const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col md="3" className="text-center text-md-start mb-3 mb-md-0">
            <img
              src="Logo.png"
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </Col>

          {/* Quick Links */}
          <Col md="3" className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-dark text-decoration-none">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Legal Links */}
          <Col md="3" className="text-center text-md-start">
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#privacy-policy"
                  className="text-dark text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-of-service"
                  className="text-dark text-decoration-none"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr />

        {/* Bottom Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} PostReview. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
