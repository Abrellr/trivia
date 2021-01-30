import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function LandmarkCard() {
  return (
    <Container className="landmarkContainer">
      <Row>
        <Col>
          <Card className="landmarkCard">
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
