import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import athena from "../../Assets/Projects/athena-2.png";
import pantry from "../../Assets/Projects/pantry-1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <ProjectCard
            imgPath={athena}
            isBlog={false}
            title="Athena - AI content Generation Saas"
            description="Athena is an innovative SaaS platform designed to harness the power of open-source AI APIs to generate a variety of content, including images, audio, code snippets, and conversational chat. Built with cutting-edge technologies like React, TypeScript, and Tailwind CSS, Athena offers a seamless and intuitive user experience. The backend, powered by Next.js and Prisma, ensures robust functionality and efficient data management. Athena also integrates Clerk for user authentication, Axios for executing API requests, Crisp chat for customer support, and Stripe API for payment processing, making advanced AI content generation accessible to all."
            ghLink="https://github.com/ahmadzaki8828/Ai-platform"
          />
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "15px",
            paddingBottom: "10px",
          }}
        >
          <ProjectCard
            imgPath={pantry}
            isBlog={false}
            title="PantryPal - Smart Pantry Tracker"
            description="PantryPal is a dynamic pantry management application built using React and Material-UI designed to streamline grocery organization and meal planning. The app leverages Firebase for real-time data synchronization, enabling users to effortlessly track and update pantry items. With the integration of OpenAI's ChatGPT API, PantryPal offers personalized recipe suggestions based on available ingredients, enhancing the overall user experience. Additional features include intuitive search functionality and item quantity adjustment, allowing users to seamlessly add, remove, or update pantry items with ease."
            ghLink="https://github.com/ahmadzaki8828/pantry-tracker"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
