import React from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

export default function Title() {
  return (
    <Row>
      <Col>
        <svg viewBox="0 0 600 150">
          <text textAnchor="middle" x="50%" y="60%" fill="transparent">
            Trivia Wars
          </text>
        </svg>
      </Col>
    </Row>
  );
}
