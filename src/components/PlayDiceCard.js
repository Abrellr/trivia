import React, { useEffect, useState } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import DiceOne from "./DiceOne.js";
import DiceTwo from "./DiceTwo.js";
import diceOne from "../data/diceOne";
import diceTwo from "../data/diceTwo";

export default function PlayDiceCard() {
  //set the initial state for dice image
  const [diceOneIndex, setDiceOneIndex] = useState(0);
  const [diceTwoIndex, setDiceTwoIndex] = useState(0);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  function nextDiceIndex() {
    setDiceOneIndex(Math.floor(Math.random() * 6));
    setDiceTwoIndex(Math.floor(Math.random() * 6));
  }

  //setScore will be triggered each time dice Index changes
  useEffect(() => {
    if (diceOneIndex > diceTwoIndex) {
      setScorePlayer1(scorePlayer1 + 1);
    } else if (diceTwoIndex > diceOneIndex) {
      setScorePlayer2(scorePlayer2 + 1);
    } else if (diceTwoIndex === diceOneIndex) {
      setScorePlayer2(scorePlayer2 + 0);
      setScorePlayer1(scorePlayer1 + 0);
    }
  }, [diceOneIndex, diceTwoIndex]);

  function setWinner() {
    if (diceOneIndex > diceTwoIndex) {
      return "🚩 Player one wins!";
    } else if (diceTwoIndex > diceOneIndex) {
      return "🚩 Player two wins!";
    } else {
      return "Draw!";
    }
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h3 className="winnerText">{setWinner()}</h3>
      </Row>
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
        <Button
          id="nextBtn"
          onClick={() => {
            nextDiceIndex();
          }}
        >
          Refresh me!
        </Button>
      </Row>
      <Row className="justify-content-center flex-column mt-5">
        <Col className="d-flex justify-content-center">
          <p className="player">Player 1 score: {scorePlayer1}</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <p className="player">Player 2 score: {scorePlayer2}</p>
        </Col>
      </Row>
    </Container>
  );
}
