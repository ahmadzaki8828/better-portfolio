import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAmazons3,
  SiAngularjs,
  SiAwsamplify,
  SiAwslambda,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
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
        <h4>Next JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
        <h4>Angular</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>Mongo DB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h4>Postgres SQL</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h4>Firebase</h4>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h4>Java</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h4>AWS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify />
        <h4>AWS Amplify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
        <h4>AWS Lambda</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
        <h4>AWS DynamoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
        <h4>AWS S3</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
