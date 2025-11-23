      import React from "react";
      import Card from "react-bootstrap/Card";
      
      function ExperienceCard(props) {
        return (
          <Card className="experience-card-view">
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle className="mb-2">{props.company}</Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
      export default ExperienceCard;