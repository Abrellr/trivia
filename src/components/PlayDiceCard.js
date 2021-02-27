import React from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function PlayDiceCard() {
  return (
    <Container fluid>
      <Row className="cardRow">
        <Card className="landmarkCard">
          <Card.Body>
            <Card.Title>Coming Soon!</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
