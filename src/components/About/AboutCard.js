import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Ahmad Zaki</span> from
            <span className="purple"> Pakistan</span>. <br />
            <br />
            I’m currently pursuing a
            <span className="purple"> Bachelor’s in Computer Science </span>
            at York University, where I’m advancing my skills and gaining deeper
            insights into software engineering.
            <br />
            <br />
            Beyond coding, I’m passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A program is never less than 90% complete, and never more than 95%
            complete."
          </p>
          <footer className="blockquote-footer">Terry Baker, coder</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
