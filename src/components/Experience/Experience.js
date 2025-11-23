import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few places I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ExperienceCard
              title="Technical System Analyst"
              company="Royal Bank of Canada | Toronto, ON | Sep 2025 – Dec 2025"
              description={
                <ul>
                  <li>Supported cloud application reliability across Azure, AWS, and Databricks by monitoring pipelines, troubleshooting deployment issues, and maintaining system stability</li>
                  <li>Automated infrastructure configuration and deployment using Terraform, improving consistency and reducing manual setup time across environments</li>
                  <li>Collaborated with the Cloud Support team to analyze and resolve production incidents, enhancing application uptime and operational efficiency</li>
                  <li>Coordinated with cross-functional teams to test and validate new deployments, ensuring adherence to RBC’s cloud governance framework</li>
                </ul>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;