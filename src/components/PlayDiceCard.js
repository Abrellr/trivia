import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";

export default function PlayDiceCard({
  diceOneIndex,
  diceTwoIndex,
  key,
  nextDiceIndex,
}) {
  return (
    <Container fluid>
      <Row className="cardRow">
        <Card className="playDiceCard">
          <Card.Body>
            <img
              key={key}
              className="diceImg"
              src={diceOneIndex}
              alt="diceOne"
            />
            <img
              key={key}
              className="diceImg"
              src={diceTwoIndex}
              alt="diceTwo"
            />
          </Card.Body>
        </Card>
      </Row>
      <Row className="btnRow">
        <Button id="nextBtn" onClick={nextDiceIndex}>
          Next
        </Button>
      </Row>
    </Container>
  );
}
