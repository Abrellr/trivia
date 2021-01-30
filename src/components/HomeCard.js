import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function HomeCard() {
  return (
    <Container className="border-md-right border-md-left homeContainer">
      <Row>
        <Col>
          <Card className="gameCard">
            <Card.Body>
              <Card.Title className="gameTitle">
                <svg id="gameTitle" viewBox="0 0 600 300">
                  <text
                    text-anchor="middle"
                    x="50%"
                    y="50%"
                    dy=".35em"
                    class="text"
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
                <Button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    width: "200px",
                  }}
                >
                  Play
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
