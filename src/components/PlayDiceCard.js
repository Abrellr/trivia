import React from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function PlayDiceCard() {
  // let randomNumber1 = diceOne[Math.floor(Math.random() * 6) + 1];

  // let randomNumber2 = diceTwo[Math.floor(Math.random() * 6) + 1];

  return (
    <Container fluid>
      <Row className="cardRow">
        <Card className="playDiceCard">
          <Card.Body>
            <Card.Title>Coming Soon!</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
