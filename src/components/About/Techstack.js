import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiAmazonaws,
  SiAngularjs,
  SiNextdotjs,
  SiPostgresql,
  SiTerraform,
  SiTypescript,
  SiAmazondynamodb,
  SiAmazons3,
  SiAwslambda,
  SiMicrosoftazure,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h4>Typescript</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h4>Tailwind</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h4>Next.js</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
        <h4>Angular</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node.js</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h4>PostgreSQL</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h4>Java</h4>
      </Col>

      {/* Cloud + Infra */}

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <h4>Azure</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h4>AWS</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <h4>Terraform</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
