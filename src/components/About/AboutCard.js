import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Ahmad Zaki </span>
            from <span className="purple"> Pakistan</span>
            <br /> <br></br>I am currently pursuing my
            <span className="purple">
              {" "}
              Bachelor in Computer Science(Honors)
            </span>{" "}
            at York University.<br></br>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A program is never less than 90% complete, and never more than 95%
            complete."
          </p>
          <footer className="blockquote-footer">Terry Baker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
