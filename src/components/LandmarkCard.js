import React from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function LandmarkCard(props) {
  console.log(props.image);
  return (
    <Container fluid>
      <Row className="cardRow">
        <Card className="landmarkCard">
          <Card.Body key={props.id}>
            <Card.Img variant="top" src={props.image} />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
