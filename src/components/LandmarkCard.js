import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <h3 className="timesUp">Time's up!</h3>;
  }
  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default function LandmarkCard(props) {
  //console.log(props.image);
  return (
    <Container fluid>
      <Row className="cardRow">
        <Card className="landmarkCard">
          <Card.Body key={props.id}>
            <Card.Img variant="top" src={props.image} />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 3000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </Row>
    </Container>
  );
}
