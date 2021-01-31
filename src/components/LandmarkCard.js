import React from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function LandmarkCard(props) {
  console.log(props);
  return (
    <Container fluid>
      <Row className="cardRow">
        <Card key={props.id} className="landmarkCard">
          <Card.Body>
            <Card.Img variant="top" src={props.image} />
          </Card.Body>
          <button onClick={props.nextLandmark}>Next</button>
        </Card>
      </Row>
    </Container>
  );
}
