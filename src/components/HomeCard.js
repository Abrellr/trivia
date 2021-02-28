import React from "react";
import { Container, Row, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeCard() {
  return (
    <Container fluid>
      <Carousel slide={false} fade={false}>
        <Carousel.Item className="carouselItem">
          <Row className="cardRow">
            <Card className="gameCard">
              <Card.Body>
                <Card.Title className="gameTitle">
                  <svg id="gameTitle" viewBox="0 0 600 300">
                    <text
                      textAnchor="middle"
                      x="50%"
                      y="50%"
                      dy=".35em"
                      className="text"
                      fill="url(#gr-simple)"
                    >
                      Guess the landmark
                    </text>
                  </svg>
                </Card.Title>
                <Card.Text className="gameDesc">
                  Test your knowledge by guessing the country or location of
                  this landmark.
                </Card.Text>
                <div className="btnContainer">
                  <Link to={"/landmark"}>
                    <Button
                      style={{
                        color: "white",
                        width: "200px",
                      }}
                    >
                      Play
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <Row className="cardRow">
            <Card className="gameCard">
              <Card.Body>
                <Card.Title className="gameTitle">
                  <svg id="gameTitle" viewBox="0 0 600 300">
                    <text
                      textAnchor="middle"
                      x="50%"
                      y="50%"
                      dy=".35em"
                      className="text"
                      fill="url(#gr-simple)"
                    >
                      Throw the dice!
                    </text>
                  </svg>
                </Card.Title>
                <Card.Text className="gameDesc">
                  Throw the dice! The player with a higher number of dice wins.
                </Card.Text>
                <div className="btnContainer">
                  <Link to={"/playDice"}>
                    <Button
                      style={{
                        color: "white",
                        width: "200px",
                      }}
                    >
                      Play
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
