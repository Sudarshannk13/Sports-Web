import React from "react";
import spons1 from "../../assets/Images/spons1.svg";
import spons2 from "../../assets/Images/spons2.svg";
import spons3 from "../../assets/Images/spons3.svg";
import spons4 from "../../assets/Images/spons4.svg";
import spons5 from "../../assets/Images/spons5.svg";
import spons6 from "../../assets/Images/spons6.svg";
import spons7 from "../../assets/Images/spons7.svg";
import spons8 from "../../assets/Images/spons8.svg";
import { Col, Row } from "react-bootstrap";

function Sponsers() {
  const sponsors = [
    spons1,
    spons2,
    spons3,
    spons4,
    spons5,
    spons6,
    spons7,
    spons8,
  ];

  return (
    <Row className="g-2 align-items-center justify-content-center my-3">
      {sponsors.map((sponsor, index) => (
        <Col key={index} xs={3} md={3} lg={1} className="text-center" >
          <a href="#">
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="img-fluid sponsor-icon"
            />
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default Sponsers;
