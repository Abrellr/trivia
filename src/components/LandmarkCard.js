import React from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function LandmarkCard() {
  return (
    <Container fluid>
      <Row className="cardRow">
        <Card className="landmarkCard">
          <Card.Body>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
