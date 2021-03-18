import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <p className="timesUp">Time's up!</p>;
//   }
//   return (
//     <Container className="justify-content-center">
//       <div className="justify-content-center mt-5">
//         <h4>Remaining</h4>
//       </div>
//       <div className="justify-content-center">{remainingTime}</div>
//       <p className="mt-5">seconds</p>
//     </Container>
//   );
// };

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
      <Row className="justify-content-center mt-5">
        {/* <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 20000]}
          size={50}
          strokeWidth={6}
        >
          {renderTime}
        </CountdownCircleTimer> */}
      </Row>
    </Container>
  );
}
