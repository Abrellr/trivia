import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeCard() {
  return (
    <Container fluid>
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
              One minute to guess as many landmarks as you can.
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
    </Container>
  );
}
