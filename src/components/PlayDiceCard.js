import React, { useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import DiceOne from "./DiceOne.js";
import DiceTwo from "./DiceTwo.js";
import diceOne from "../data/diceOne";
import diceTwo from "../data/diceTwo";

export default function PlayDiceCard() {
  //set the initial state for dice image
  const [diceOneIndex, setDiceOneIndex] = useState(0);
  const [diceTwoIndex, setDiceTwoIndex] = useState(0);

  function nextDiceIndex() {
    setDiceOneIndex(Math.floor(Math.random() * 6));
    setDiceTwoIndex(Math.floor(Math.random() * 6));
  }

  return (
    <Container fluid>
      {/* <Row>
        <h3>Player x wins!</h3>
      </Row> */}
      <Row className="cardRow">
        <Card className="playDiceCard">
          <Card.Body>
            <DiceOne
              key={diceOne[diceOneIndex].name}
              image={diceOne[diceOneIndex].image}
            />
            <DiceTwo
              key={diceTwo[diceTwoIndex].name}
              image={diceTwo[diceTwoIndex].image}
            />
          </Card.Body>
        </Card>
      </Row>
      <Row className="btnRow">
        <Button id="nextBtn" onClick={() => nextDiceIndex()}>
          Next
        </Button>
      </Row>
    </Container>
  );
}
