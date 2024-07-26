import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiWindows } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h4>Windows OS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Visual Studio Code</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
