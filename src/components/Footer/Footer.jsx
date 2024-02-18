import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className=" darkbg text-white">
      <Container className="p-5">
        <Row className="mb-5">
          {/* Section 1: About Us */}
          <Col xs={12} md={3}>
            <h4 className="mb-3">About Us</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              ea voluptate ratione numquam? Nisi nam assumenda temporibus?
              Consequuntur, veniam libero!
            </p>
          </Col>

          {/* Section 2: List Items in three columns */}
          <Col xs={12} md={6}>
            <Row>
              <Col xs={4} md={3}>
                <ul>
                  <li>Home</li>
                  <li>Club</li>
                  <li>Teams</li>
                  <li>Fixture</li>
                </ul>
              </Col>
              <Col xs={4} md={3}>
                <ul>
                  <li>Standings</li>
                  <li>Media</li>
                  <li>Academy</li>
                </ul>
              </Col>
              <Col xs={4} md={4}>
                <ul>
                  <li>Privacy</li>
                  <li>Cookies</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Section 3: Newsletter Sign Up */}
          <Col xs={12} md={3}>
            <div className="d-none d-md-block vertical-line"></div>{" "}
            {/* Vertical line on large screens */}
            <div className="d-md-none horizontal-line"></div>{" "}
            {/* Horizontal line on medium and small screens */}
            <h5>Newsletter Sign Up</h5>
            <Form>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter your name "
                  className="my-3"
                />
                <Form.Label>
                  Enter your e-mail below to select topics and stay current with
                  our latest news. We promise not to spam!
                </Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* copyright */}
      <Container fluid>
        <Row className="lightbg pt-2 align-items-center ">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <p className="text-center">
              COPYRIGHT <span>&copy;</span> MYJ Sports LLP 2024-25
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center ">
            <p>Follow Us :</p>
            <a href="#" className="mx-2">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#000000" }}
              />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#000000" }}
              />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000" }} />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000" }} />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#000000" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
